import React from "react";
import "./ContentDisplay.css";

const ContentDisplay = ({ from, to, sub, content, click2, setClick2 }) => {
  return (
    <div
      className="root_main"
      onClick={() => {
        setClick2(!click2);
      }}
    >
      <div className="j7 p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <p className="display-7 fw heading">{from}</p>
          <p className="fw heading">{sub}</p>
          <p className="col-md-8 fs-5">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
