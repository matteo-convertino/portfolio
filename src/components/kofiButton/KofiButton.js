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
        Support me on Ko-Fi
      </a>
    </div>
  );
}
