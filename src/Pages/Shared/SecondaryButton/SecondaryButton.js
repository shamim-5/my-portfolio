import React from "react";

const SecondaryButton = ({children}) => {
  return (
    <div>
      <button className="button ">
        <span className="button-text">{children}</span>
       
      </button>
    </div>
  );
};

export default SecondaryButton;
