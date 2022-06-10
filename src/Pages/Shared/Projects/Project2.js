import React from "react";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Project2 = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="grid md:grid-cols-2 gap-1">
        <div>
          <div className="card shadow-xl rounded-l-lg rounded-r-none">
            <div className="card-body p-0">
              <img
                className="h-100"
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654876195/my-portfolio/project-jpg/Screenshot_9_hjz7d0.jpg`}
                alt="screen_shot_1"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="card shadow-xl rounded-l-none rounded-r-sm">
            <div className="card-body p-0">
              <img
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654876194/my-portfolio/project-jpg/Screenshot_10_n5faep.jpg`}
                alt="screen_shot_2"
              />
            </div>
          </div>
          <div className="card shadow-xl rounded-l-none rounded-r-sm">
            <div className="card-body p-0">
              <img
                src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1654876194/my-portfolio/project-jpg/Screenshot_12_uisd5p.jpg`}
                alt="screen_shot_3"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">The Motorbike Warehouse [Full Stack]</h2>
        <h2 className="text-lg font-bold">
          Code Link:{" "}
          <a
            href="https://github.com/shamim-5/the-motorbike-warehouse-client-side"
            target="_blank"
            rel="noreferrer noopener"
          >
            Client-side
          </a>{" "}
          ||{" "}
          <a
            href="https://github.com/shamim-5/the-motorbike-warehouse-server-side"
            target="_blank"
            rel="noreferrer noopener"
          >
            Server-side{" "}
          </a>
        </h2>

        <div className="text-slate-300 py-2">
          <p>This website based on warehouse management</p>
          <p>Email/Password and Google authentication implemented</p>
          <p>Admin can manage stock quantity of products</p>
          <p>Database connectivity to better manage products etc</p>
          <p>Use "react router hook" for implement login / registration system</p>
        </div>

        <h2 className="text-lg font-bold">Technology: React.js, Tailwind CSS, Node.js, MongoDB, Firebase</h2>

        <div className="pt-4">
          <a href="https://warehouse-management-1a464.web.app/" target="_blank" rel="noreferrer noopener">
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

export default Project2;
