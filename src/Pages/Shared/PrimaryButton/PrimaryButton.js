import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <span>
        <p className="button grad transition">{children}</p>
      </span>
    </div>
  );
};

export default PrimaryButton;
