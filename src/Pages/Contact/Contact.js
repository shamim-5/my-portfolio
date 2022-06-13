import React from "react";
import Email from "../Email/Email";

const Contact = () => {
  return (
    <div className="mt-2 ">
      <div className="grid md:grid-cols-2 grid-cols-1  text-md ">
        <div className="">
          <Email />
        </div>
        <div className="bg-[#111111]">
          <div className="md:pt-12 md:pb-6 pt-12 pb-16 mt-2 container">
            <h2 className="text-5xl font-bold  uppercase mb-4">
              Get In <span className="text-warning inline">Touch</span>
            </h2>
            <div className="pb-2">
              <h3 className="text-2xl pb-4 font-bold">DON'T BE SHY !</h3>
              <p className="w-5/6">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-start pt-6">
                <img
                  className="w-9"
                  src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655105647/my-portfolio/icon.png/icons8-map-48_nkxc0p.png`}
                  alt=""
                />
                <h3 className="text-[#AEAEAE] font-bold ml-2 ">ADDRESS POINT</h3>
              </div>
              <p>Bhola, Barishal, Bangladesh</p>
              <p></p>
              <div className="flex items-center justify-start pt-6">
                <img
                  className="w-9"
                  src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655105647/my-portfolio/icon.png/icons8-secured-letter-48_r6iojs.png`}
                  alt=""
                />
                <h3 className="text-[#AEAEAE] font-bold ml-2 ">MAIL ME</h3>
              </div>
              <a href="mailto:shamim.somadder5@gmail.com">
                <p className="text-white">shamim.somadder5@gmail.com</p>
              </a>
              <p></p>
              <div className="flex items-center justify-start pt-6">
                <img
                  className="w-9"
                  src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_4_dsb95l.png`}
                  alt=""
                />
                <h3 className="text-[#AEAEAE] font-bold ml-2 ">CALL ME</h3>
              </div>
              <p >+880 1950-402657</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
