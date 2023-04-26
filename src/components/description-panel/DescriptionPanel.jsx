import React, { useState } from "react";
import "./AboutAccordion.css";
import "./HousingAccordion.css";

function DescriptionPanel(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={
        window.location.pathname === "/about"
          ? "about-accordion"
          : "housing-accordion"
      }
    >
      <div
        className={
          window.location.pathname === "/about"
            ? "about-accordion-item"
            : "housing-accordion-item"
        }
      >
        <div
          className={
            window.location.pathname === "/about"
              ? "about-accordion-title"
              : "housing-accordion-title"
          }
          onClick={() => setIsActive(!isActive)}
        >
          <p>{props.title}</p>

          <i
            className={isActive ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          ></i>
        </div>
        {isActive && (
          <div
            className={
              window.location.pathname === "/about"
                ? "about-accordion-content"
                : "housing-accordion-content"
            }
          >
            {props.content}
          </div>
        )}
      </div>
    </div>
  );
}

export default DescriptionPanel;
