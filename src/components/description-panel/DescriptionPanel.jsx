import React, { useState } from "react";
import "./DescriptionPanel.css";

function DescriptionPanel(props) {
  const [slidePanel, setslidePanel] = useState(true);
  const [rotateChevron, setRotateChevron] = useState(true);

  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";
  const slide = slidePanel ? "translateY(-100%)" : "translateY(0)";

  const showContent = () => {
    setslidePanel(!slidePanel);
    setRotateChevron(!rotateChevron);
  };

  return (
    <div className="description__panel__container">
      <div
        className="description__panel__title__container"
        onClick={showContent}
      >
        <h2 className="description__panel__title">{props.title}</h2>

        <span className="description__panel__arrow">
          <i
            className="fas fa-chevron-up"
            style={{ transform: rotate, transition: "all 0.5s ease-in-out" }}
          ></i>
        </span>
      </div>

      <div
        className="description__panel__text__container"
        style={{ transform: slide, transition: "all 0.5s ease-in-out" }}
      >
        <p className="description__panel__text">{props.content}</p>
      </div>
    </div>
  );
}

export default DescriptionPanel;
