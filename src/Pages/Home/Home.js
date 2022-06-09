import React from "react";
import SecondaryButton from "../Shared/SecondaryButton/SecondaryButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="container bg-image grid md:grid-cols-3 grid-cols-1  mt-12 gap-4">
      <div class="card col-span-1">
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
                  <span>More about me</span>{" "}
                  <span className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </SecondaryButton>
            </div>
            <div className="pb-6">
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
            </div>
          </div>
        </div>
        <div className=" flex md:flex-col  flex-row justify-between h-1/2 items-end pb-12 md:my-auto  mt-12">
          <div className="cursor-pointer">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654789121/my-portfolio/icon.png/linkedIn_pbljlz.png`}
              alt="linked-in"
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_5_hyflpt.png`}
              alt="git-hub"
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_1_rcsbhu.png`}
              alt="gmail"
            />
          </div>
          <div className="cursor-pointer">
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_4_dsb95l.png`}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
