import React from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Project1 = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="grid md:grid-cols-2 gap-1">
        <div>
          <div className="card shadow-xl rounded-l-lg rounded-r-none">
            <div className="card-body p-0">
              <img
                className="h-100"
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654858700/my-portfolio/project-jpg/Screenshot_4_1_gpilut.jpg`}
                alt="screen_shot_1"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="card shadow-xl rounded-l-none rounded-r-sm">
            <div className="card-body p-0">
              <img
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654858700/my-portfolio/project-jpg/Screenshot_4_srs2qm.jpg`}
                alt="screen_shot_2"
              />
            </div>
          </div>
          <div className="card shadow-xl rounded-l-none rounded-r-sm">
            <div className="card-body p-0">
              <img
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654877684/my-portfolio/project-jpg/Screenshot_16_oe2xy6.jpg`}
                alt="screen_shot_3"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Website: MS Auto Parts [Full Stack]</h2>
        <h2 className="text-lg font-bold">
          Code Link:{" "}
          <a href="https://github.com/shamim-5/ms-auto-parts-client-side" target="_blank" rel="noreferrer noopener">
            Client-side
          </a>{" "}
          ||{" "}
          <a href="https://github.com/shamim-5/ms-auto-parts-server-side" target="_blank" rel="noreferrer noopener">
            Server-side{" "}
          </a>
        </h2>

        <div className="text-slate-300 py-2">
          <p>This website based on spare parts manufacturer</p>
          <p>Email/Password and Google authentication implemented</p>
          <p>Authenticate with JWT token verification</p>
          <p>Dashboard and Payment system implemented</p>
          <p>Dashboard will have user access. all usrer access given only admin</p>
        </div>

        <h2 className="text-lg font-bold">Technology: React.js, Tailwind CSS, Node.js, MongoDB, Firebase</h2>

        <div className="pt-4">
          <a href="https://manufacturer-website-c427c.web.app" target="_blank" rel="noreferrer noopener">
            <SecondaryButton>
              <div className="flex flex-row justify-center items-center uppercase">
                <span>Show Project</span>{" "}
                <span className="ml-1 mr-0">
                  <img
                    className="w-6"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654862301/my-portfolio/icon.png/icons8-open-in-popup-48_m2hnvk.png`}
                    alt="show-icon"
                  />
                </span>
              </div>
            </SecondaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project1;
