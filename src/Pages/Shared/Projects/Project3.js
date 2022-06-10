import React from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Project3 = () => {
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
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654858700/my-portfolio/project-jpg/Screenshot_4_srs2qm.jpg`}
                alt="screen_shot_3"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Website: MS Auto Parts [Full Stack]</h2>
        <h2 className="text-lg font-bold">
          Code Link: <a href="a">Client-side</a> || <a href="a">Server-side </a>
        </h2>

        <div className="text-accent py-2">
          <p>pppppppppppppppppppppppppppppppppppppppppppppp</p>
          <p>pppppppppppppppppppppppppppppppppppppppppppppp</p>
          <p>pppppppppppppppppppppppppppppppppppppppppppppp</p>
          <p>pppppppppppppppppppppppppppppppppppppppppppppp</p>
          <p>pppppppppppppppppppppppppppppppppppppppppppppp</p>
        </div>

        <h2 className="text-lg font-bold">Technology: React.js, Tailwind CSS, Node.js, MongoDB, Firebase</h2>

        <div className="pt-4">
          <a href="a" target="_blank" rel="noreferrer noopener">
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

export default Project3;
