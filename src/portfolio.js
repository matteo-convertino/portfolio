/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  displayGreeting: true,
  username: "Matteo Convertino",
  title: "Hi all, I'm Matteo",
  subTitle: emoji(
    "I'm a Computer Engineering student with an insatiable passion for software development and more. " +
      "I have explored various fields: Web and Mobile development, IoT, automation scripting," +
      " Networking & Cybersecurity, Computer Vision and much more. My thirst for knowledge drives my" +
      " commitment to continuous innovation."
  ),
  resumeLink: "" // Set to empty to hide the button
};

// Social Media Links
const socialMediaLinks = {
  display: true,
  github: "https://github.com/matteo-convertino",
  linkedin: "https://www.linkedin.com/in/m-convertino/",
  gmail: "matteo@convertino.cloud",
  telegram: "https://t.me/matteo_convertino",
  gitlab: "https://gitlab.com/matteo-convertino",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/21896742/matteo-convertino"
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
};

// Skills Section
const skillsSection = {
  display: false,
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [],

  // Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    }
  ]
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bio-Medical Campus University of Rome",
      logo: require("./assets/images/education/campusBiomedicoLogo.jpg"),
      subHeader:
        "<a href='https://www.unicampus.it/en/corsi/offerta-formativa/corsi-di-laurea-magistrale/facolta-dipartimentale-di-ingegneria/cdlm-ingegneria-dei-sistemi-intelligenti-lm-32/' target='_blank'>Intelligent Systems Engineering</a>",
      duration: "Planned",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Polytechnic University of Milan",
      logo: require("./assets/images/education/polimiLogo.jpg"),
      subHeader:
        "Bachelor's degree in <a href='https://www.polimi.it/formazione/corsi-di-laurea/dettaglio-corso/ingegneria-informatica' target='_blank'>Computer Engineering</a>",
      duration: "September 2022 - July 2025",
      desc: "",
      descBullets: [
        " <a class='subTitle' href='https://pitch.com/v/presentazione-foody-hk9puv'>Foody presentation (degree thesis)</a>",
        "<a class='subTitle' href='https://docs.google.com/document/d/1p1RFOiUF8x7opr-N9B8PLcPE7cJZiqI1_v2iclKKEvk/edit?usp=sharing'>Foody documentation (degree thesis)</a>",
        "<a class='subTitle' href='https://github.com/foody-elis'>Foody GitHub repository (degree thesis)</a>"
      ]
    },
    {
      schoolName: "ELIS",
      logo: require("./assets/images/education/elisLogo.jpeg"),
      subHeader:
        "<a href='https://www.elis.org/education-training/corso-ingegneria-digitale/' target='_blank'>Digital Engineering</a> course",
      duration: "September 2022 - July 2025",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "I.I.S.S Ettore Majorana",
      logo: require("./assets/images/education/majoranaLogo.jpg"),
      subHeader: "IT and Telecommunications",
      duration: "September 2017 - July 2022",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  viewSkillBars: false, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Flutter Developer",
      company: "ERSAF",
      companylogo: require("./assets/images/workExperience/ersafLogo.jpg"),
      date: "November 2025 – Present"
    },
    {
      role: "Back-End Developer",
      company: "Fincantieri NextTech Spa",
      companylogo: require("./assets/images/workExperience/fincantieriLogo.jpg"),
      date: "March 2025 – July 2025",
      desc:
        "The goal of this internship was to integrate Motorola land mobile radio systems with existing " +
        "C2 infrastructures, enabling reliable message exchange and data synchronization.",
      descBullets: [
        "Developing an XMPP client within a .NET (C#) backend to handle message exchange",
        "Configuring an Openfire server to manage message routing",
        "Implementing support for unicast, multicast and broadcast messaging"
      ]
    },
    {
      role: "AI Developer | Computer Vision",
      company: "Saipem",
      companylogo: require("./assets/images/workExperience/saipemLogo.png"),
      date: "March 2024 – July 2024",
      desc:
        "The objective of this internship was to train neural networks that would allow subsea drones " +
        "to autonomously identify structures and obstacles that they might encounter during offshore operations.",
      descBullets: [
        "Scouting for cutting-edge models for instance segmentation and object detection",
        "Building the dataset through image annotation",
        "Training of the 3 selected models",
        "Comparison of the final results between the 3 models"
      ]
    },
    {
      role: "Android Developer",
      company: "ENEL Gridspertise",
      companylogo: require("./assets/images/workExperience/enelLogo.jpeg"),
      date: "March 2023 – July 2023",
      desc:
        "ENEL Gridspertise has solutions for improving the efficiency of the installation and troubleshooting " +
        "process of Advanced Metering Infrastructures (AMI) and communication between network devices.<br/>" +
        "One of the solutions developed by Gridspertise for these activities is SuRF.<br/><br/>" +
        "The final goal of the internship was to create an intuitive Android mobile application to simplify the " +
        "interfacing of Distribution System Operators (DSOs) with SuRF."
    }
  ]
};

// Your open source section to view your GitHub pinned projects
const openSource = {
  display: true,
  showGithubProfile: "false" // show Contact profile using GitHub
};

// Some big projects you have worked on
const bigProjects = {
  display: true,
  title: "Side Projects",
  subtitle:
    "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH PRODUCTS",
  projects: [
    {
      image: require("./assets/images/bigProjects/xpetis.png"),
      projectName: "XPETIS",
      projectDesc: "Founding Team Member & CTO",
      footerLink: [
        {
          name: "Visit website (Coming soon)",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/bigProjects/jobaround.png"),
      projectName: "Job Around",
      projectDesc: "Founding Team Member & CTO",
      footerLink: [
        {
          name: "Visit website",
          url: "https://jobaround.it/"
        }
      ]
    },
    {
      image: require("./assets/images/bigProjects/takeusicily.png"),
      projectName: "TakeUSicily",
      projectDesc: "Wordpress Developer",
      footerLink: [
        {
          name: "Visit website",
          url: "https://takeusicily.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bigProjects/fooddiia.png"),
      projectName: "Fooddiiaa",
      projectDesc: "Wordpress Developer",
      footerLink: [
        {
          name: "Visit website",
          url: "https://www.fooddiia.it/"
        }
      ]
    },
    {
      image: require("./assets/images/bigProjects/tiformiamonoi.png"),
      projectName: "Tiformiamonoi",
      projectDesc: "Wordpress Developer",
      footerLink: [
        {
          name: "Visit website",
          url: "https://tiformiamonoi.it/"
        }
      ]
    }
  ]
};

// Achievement, certificates, talks etc.
const achievementSection = {
  display: true,
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ELIS College",
      subtitle: "ELIS",
      image: require("./assets/images/achievement/elis.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "Visit website",
          url: "https://www.elis.org/formazione/college/"
        }
      ]
    },
    {
      title: "Founders Academy",
      subtitle: "Starting Finance",
      image: require("./assets/images/achievement/foundersAcademy.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "Visit website",
          url: "https://shop.startingfinance.com/products/foundersacademy"
        }
      ]
    }
  ]
};

// Blogs Section
const blogSection = {
  display: false,
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ]
};

// Talks Sections
const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ]
};

// Podcast Section
const podcastSection = {
  display: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

// Resume Section
const resumeSection = {
  display: false,
  title: "Resume",
  subtitle: "Feel free to download my resume"
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "matteo@convertino.cloud"
};

// Twitter Section
const twitterDetails = {
  display: false,
  userName: "twitter" // Replace "twitter" with your Twitter username without @
};

const isHireable = false; // will be also display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
