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
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654877255/my-portfolio/project-jpg/Screenshot_14_r3wteo.jpg`}
                alt="screen_shot_1"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="card shadow-xl rounded-l-none rounded-r-sm">
            <div className="card-body p-0">
              <img
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654877255/my-portfolio/project-jpg/Screenshot_13_ewzjxn.jpg`}
                alt="screen_shot_2"
              />
            </div>
          </div>
          <div className="card shadow-xl rounded-l-none rounded-r-sm">
            <div className="card-body p-0">
              <img
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654877254/my-portfolio/project-jpg/Screenshot_15_mboesh.jpg`}
                alt="screen_shot_3"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Website: Perfumed Corner</h2>
        <h2 className="text-lg font-bold">
          Code Link:{" "}
          <a href="https://github.com/shamim-5/perfumed-corner" target="_blank" rel="noreferrer noopener">
            Client-side
          </a>{" "}
        </h2>

        <div className="text-slate-300 py-2">
          <p>This website based on simple product selection</p>
          <p>User can add product into cart</p>
          <p>User can choose product randomly</p>
          <p>Reset selected products implemented etc</p>
        </div>

        <h2 className="text-lg font-bold">Technology: React.js, CSS</h2>

        <div className="pt-4">
          <a href="https://lucky-one123.netlify.app/" target="_blank" rel="noreferrer noopener">
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
