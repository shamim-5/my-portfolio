import React from "react";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Shared/SecondaryButton/SecondaryButton";
import "./Home.css";

const Home = () => {
  return (
    <div className=" bg-image grid md:grid-cols-3 container mt-12 gap-4">
      <div class="card col-span-1 ">
        <figure>
          {" "}
          <img
            src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654757076/my-portfolio/profile_pic_upmnv9.jpg`}
            alt="profile-pic"
          />
        </figure>
      </div>
      <div className="col-span-2 flex md:flex-row flex-col justify-between ">
        <div className=" mx-auto">
          <h1 className="text-5xl text-warning font-bold font-mono text-center pb-4">I'M MD.SHAMIM SOMADDER.</h1>
          <h1 className="text-5xl text-warning text-center font-bold font-mono">WEB DEVELOPER</h1>
          <p className="text-lg font-semibold container py-6">
            I am a front-end web developer. I love to use my creativity and make something new. That's why I love to
            work with React.js. My ultimate goal is to become an awesome full-stack web developer who can make beautiful
            UIs and also can handle the back-end smoothly.
          </p>
          <span className="container">
            {" "}
            <SecondaryButton>
              <div className="flex flex-row justify-center items-center uppercase">
                <span>More about me</span>{" "}
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 ml-2"
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
          </span>
        </div>
        <div className=" flex flex-col  justify-between h-1/2 items-end">
          <SecondaryButton>
            <div className="flex flex-row justify-center items-center">
              <span>Resume</span>{" "}
              <span className="ml-1">
                <img
                  className=""
                  src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_3_kgkzsc.png`}
                  alt="download-resume"
                />
              </span>
            </div>
          </SecondaryButton>
          <div>
            <img
              src={` https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_2_ogsr4f.png`}
              alt="linked-in"
            />
          </div>
          <div>
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_5_hyflpt.png`}
              alt="git-hub"
            />
          </div>
          <div>
            <img
              src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654786160/my-portfolio/icon.png/icon_1_rcsbhu.png`}
              alt="gmail"
            />
          </div>
          <div>
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
