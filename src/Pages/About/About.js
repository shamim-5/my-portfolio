import React from "react";
import LinkIconAbout from "../Shared/LinkIcon/LinkIconAbout";

const About = () => {
  return (
    <div className="bg-neutral">
      <div className="container md:py-12 py-6 mt-2 ">
        <h2 className="text-5xl font-bold  uppercase mb-4 text-center">
          About <span className="text-warning inline">Me</span>
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 text-md my-6">
          <div className="col-span-2">
            <h3 className="text-2xl pb-2 font-bold">PERSONAL INFOS</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Name:</h3>
                  <p className=" font-bold ml-2 ">Md. Shamim Somadder</p>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Nationality:</h3>
                  <p className=" font-bold ml-2 ">Bangladeshi</p>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Freelance:</h3>
                  <p className=" font-bold ml-2 ">Available</p>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Phone:</h3>
                  <p className=" font-bold ml-2 ">+880 1950402657</p>
                </div>
                <LinkIconAbout />
              </div>
              <div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Religion:</h3>
                  <p className=" font-bold ml-2 ">Islam</p>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Address:</h3>
                  <p className=" font-bold ml-2 ">Bhola, Barishal, Bangladesh</p>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Languages:</h3>
                  <p className=" font-bold ml-2 ">Bangla, English</p>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <h3 className="text-[#AEAEAE] font-bold">Email:</h3>
                  <a href="mailto:shamim.somadder5@gmail.com">
                    <p className=" font-bold ml-2 text-white">shamim.somadder5@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl pb-2 font-bold">MY SKILLS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655125751/my-portfolio/icon.png/pngwing.com_3_1_a6xpfi.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">HTML</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655126059/my-portfolio/icon.png/pngwing.com_6_1_tf5xqp.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">CSS</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655125751/my-portfolio/icon.png/pngwing.com_1_1_f7sbyn.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">JAVASCRIPT</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655124133/my-portfolio/icon.png/icons8-bootstrap-48_y7x0dv.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">BOOTSTRAP</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655125751/my-portfolio/icon.png/pngwing.com_4_1_ti9sad.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">TAILWIND CSS</h3>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655125751/my-portfolio/icon.png/pngwing.com_2_1_c6otfk.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">REACTJS</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655125751/my-portfolio/icon.png/pngwing.com_5_kvlehh.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">NODEJS</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655124134/my-portfolio/icon.png/icons8-mongodb-48_ow1cge.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">MONGODB</h3>
                </div>
                <div className="flex items-center justify-start pt-6">
                  <img
                    className="w-9"
                    src={`https://res.cloudinary.com/dskmjlma4/image/upload/v1655124134/my-portfolio/icon.png/icons8-firebase-48_t6dl1c.png`}
                    alt=""
                  />
                  <h3 className=" font-bold ml-2 ">FIREBASE</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
