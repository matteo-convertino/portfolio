const feed2json = require("feed2json");
const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

async function fetchWithRetry(options, data, retries = 5, delay = 5000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await new Promise((resolve, reject) => {
        const req = https.request(options, res => {
          let responseData = "";

          res.on("data", d => {
            responseData += d;
          });

          res.on("end", () => {
            if (res.statusCode === 200) {
              resolve(responseData);
            } else if (res.statusCode === 429 && i < retries - 1) {
              console.log(`Rate limited. Retrying in ${delay}ms...`);
              setTimeout(
                () =>
                  resolve(fetchWithRetry(options, data, retries - 1, delay)),
                delay
              );
            } else {
              reject(
                new Error(
                  `${options.path} request failed with status code: ${res.statusCode}`
                )
              );
            }
          });
        });

        req.on("error", error => {
          reject(error);
        });

        if (data) {
          req.write(data);
        }
        req.end();
      });
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      console.log(`Error fetching data. Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  fetchWithRetry(default_options, data)
    .then(responseData => {
      fs.writeFile("./public/profile.json", responseData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const url = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  const options = {
    hostname: "medium.com",
    path: `/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  fetchWithRetry(options)
    .then(responseData => {
      feed2json.fromString(responseData, url, {}, (err, json) => {
        if (err) {
          console.error("Error converting feed to JSON:", err);
          return;
        }

        const mediumData = JSON.stringify(json, null, 2);
        fs.writeFile("./public/blogs.json", mediumData, function (err) {
          if (err) return console.error(err);
          console.log("Saved file to public/blogs.json");
        });
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
