import React from "react";
import PhoneModal from "./PhoneModal";

const LinkIconAbout = () => {
  return (
    <div className="mt-6">
      <div className=" flex flex-row justify-between  items-end pb-8 pt-10 md:my-auto">
        <div className="cursor-pointer">
          <a href="https://www.linkedin.com/in/shamim5/" target="_blank" rel="noreferrer noopener">
            <img
              className="w-3/4"
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654789121/my-portfolio/icon.png/linkedIn_pbljlz.png`}
              alt="linked-in"
            />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://github.com/shamim-5" target="_blank" rel="noreferrer noopener">
            <img
              className="w-3/4"
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_5_hyflpt.png`}
              alt="git-hub"
            />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="mailto:shamim.somadder5@gmail.com" target="_blank" rel="noreferrer noopener">
            <img
              className="w-3/4"
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655105647/my-portfolio/icon.png/icons8-secured-letter-48_r6iojs.png`}
              alt="gmail"
            />
          </a>
        </div>
        <div className="cursor-pointer">
          <label htmlFor="my-modal-6">
            <img
              className="w-3/4"
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_4_dsb95l.png`}
              alt="phone"
            />
          </label>
          <PhoneModal></PhoneModal>
        </div>
      </div>
    </div>
  );
};

export default LinkIconAbout;
