import React, {useState, useRef, useEffect} from "react";
import "./ExperienceCard.scss";
import {FastAverageColor} from "fast-average-color";

export default function ExperienceCard({cardInfo, isDark}) {
  const [bgHex, setBgHex] = useState(null);
  const imgRef = useRef(null);
  const facRef = useRef(null);

  useEffect(() => {
    facRef.current = new FastAverageColor();
    return () => {
      facRef.current = null;
    };
  }, []);

  async function handleImageLoad() {
    if (!imgRef.current || !facRef.current) return;
    try {
      if (imgRef.current.decode) {
        try {
          await imgRef.current.decode();
        } catch {}
      }
      const res = await facRef.current.getColorAsync(imgRef.current, {
        mode: "precision"
      });
      setBgHex(res.hex);
    } catch (e) {
      setBgHex(null);
    }
  }

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{background: bgHex || "transparent"}}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={handleImageLoad}
          onError={() => setBgHex(null)}
        />
      </div>

      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          <span dangerouslySetInnerHTML={{__html: cardInfo.desc}}></span>
        </p>
        <ul>
          {cardInfo.descBullets?.map((item, i) => (
            <li
              key={i}
              className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            >
              <div style={{textAlign: "justify"}} dangerouslySetInnerHTML={{__html: item}}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
