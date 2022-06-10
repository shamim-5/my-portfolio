import React from "react";
import PhoneModal from "./PhoneModal";

const LinkIcon = () => {
  return (
    <div>
      <div className=" flex md:flex-col  flex-row justify-between h-1/2 items-end pb-12 md:my-auto  mt-12">
        <div className="cursor-pointer">
          <a href="https://www.linkedin.com/in/shamim5/" target="_blank" rel="noreferrer noopener">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654789121/my-portfolio/icon.png/linkedIn_pbljlz.png`}
              alt="linked-in"
            />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://github.com/shamim-5" target="_blank" rel="noreferrer noopener">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_5_hyflpt.png`}
              alt="git-hub"
            />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="mailto:shamim.somadder5@gmail.com" target="_blank" rel="noreferrer noopener">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_1_rcsbhu.png`}
              alt="gmail"
            />
          </a>
        </div>
        <div className="cursor-pointer">
          <label htmlFor="my-modal-6">
            <img
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

export default LinkIcon;
