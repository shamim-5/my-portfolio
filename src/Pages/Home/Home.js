import React from "react";
import { useNavigate } from "react-router-dom";
import LinkIcon from "../Shared/LinkIcon/LinkIcon";
import SecondaryButton from "../Shared/SecondaryButton/SecondaryButton";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSendEmail = () => {
    navigate('/email')
  }
  return (
    <div className="container bg-image grid md:grid-cols-3 grid-cols-1  mt-12 gap-4">
      <div className="card col-span-1 rounded-tl-xl rounded-b-none rounded-tr-none">
        <figure>
          {" "}
          <img
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654757076/my-portfolio/profile_pic_upmnv9.jpg`}
            alt="profile-pic"
          />
        </figure>
      </div>
      <div className="col-span-2 flex md:flex-row flex-col justify-between ">
        <div className=" mx-auto my-auto">
          <h1 className="text-5xl text-warning font-bold font-mono text-center pb-4">I'M MD.SHAMIM SOMADDER.</h1>
          <h1 className="text-5xl text-warning text-center font-bold font-mono">WEB DEVELOPER</h1>
          <p className="text-lg font-semibold container pt-6 pb-12 md:text-start text-center">
            I am a front-end web developer. I love to use my creativity and make something new. That's why I love to
            work with React.js. My ultimate goal is to become an full-stack web developer who can make beautiful UIs and
            also can handle the back-end smoothly.
          </p>
          <div className="flex md:flex-row flex-col justify-around items-center">
            <div className="pb-6">
              <SecondaryButton>
                <div className="flex flex-row justify-center items-center uppercase">
                  <span onClick={handleSendEmail}>Send me an email</span>{" "}
                </div>
              </SecondaryButton>
            </div>
            <div className="pb-6">
              <a
                href="https://drive.google.com/file/d/1s89YI9UOHmc1c14-2RZWsZNJNUurcGsc/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SecondaryButton>
                  <div className="flex flex-row justify-center items-center uppercase">
                    <span>Resume</span>{" "}
                    <span className="ml-1">
                      <img
                        className="w-6"
                        src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_3_kgkzsc.png`}
                        alt="download-resume"
                      />
                    </span>
                  </div>
                </SecondaryButton>
              </a>
            </div>
          </div>
        </div>
        <LinkIcon></LinkIcon>
      </div>
    </div>
  );
};

export default Home;
