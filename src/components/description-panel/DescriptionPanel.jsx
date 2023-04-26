import React, { useState } from "react";

function DescriptionPanel(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="about-accordion housing-accordion">
      <div className="about-accordion-item housing-accordion-item">
        <div
          className="about-accordion-title housing-accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <p>{props.title}</p>

          <i
            className={isActive ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </div>
        {isActive && (
          <div className="about-accordion-content housing-accordion-content">
            {props.content}
          </div>
        )}
      </div>
    </div>
  );
}

export default DescriptionPanel;
