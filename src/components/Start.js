import React from "react";
import "./Start.css";

const Start = ({ onQuizStart, toggleTheme, themeName }) => {
  return (
    <div className="start-wrapper">
      <div>
        <button
          className="button is-info2 is-medium toggle-btn"
          onClick={toggleTheme}
        >
          Change {themeName} Theme
        </button>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1 className="start-h1">Start the quiz</h1>
            <p>Good Luck!</p>

            <button className="button is-info2 is-medium" onClick={onQuizStart}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
