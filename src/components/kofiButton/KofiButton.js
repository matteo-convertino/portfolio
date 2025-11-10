import React from "react";
import "./KofiButton.scss";

export default function KofiButton() {
  return (
    <div>
      <a className="kofi-button" href={"https://ko-fi.com/matteoconvertino"} target={"_blank"} rel="noreferrer">
        <img
          src="https://ko-fi.com/img/cup-border.png"
          className="kofiimg"
          alt="Ko-Fi button"
        />
        <span style={{color: "#323842"}}>Support me on Ko-Fi</span>
      </a>
    </div>
  );
}
