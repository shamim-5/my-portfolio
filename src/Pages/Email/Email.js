import React from "react";
import emaijs from "emailjs-com";
import SecondaryButton from "../Shared/SecondaryButton/SecondaryButton";
import { toast } from "react-toastify";

const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emaijs
      .sendForm("service_6f2p8gk", "template_8qxttxb", e.target, "kA42b-vdWUf79LWQu")
      .then((res) => {
        if (res.status === 200) {
          toast.success("Email Send Success");
        } else {
          toast.error("Email Send Failed");
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="bg-neutral w-full max-w-xs mx-auto py-6   my-6 px-4 flex flex-col justify-center items-center rounded-md text-primary border">
      <h2 className="text-3xl mb-2 uppercase font-mono font-bold">Send Me An Email</h2>
      <form onSubmit={sendEmail} className="w-full">
        <div className="w-full p-1">
          <span className="bg-transparent font-bold ">NAME</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered bg-transparent w-full"
          />
        </div>
        <div className="w-full p-1">
          <span className="bg-transparent font-bold ">EMAIL</span>
          <input
            type="email"
            name="user_email"
            placeholder="info@site.com"
            className="input input-bordered bg-transparent w-full"
            required
          />
        </div>
        <div className="w-full max-w-xs p-1">
          <span className="bg-transparent font-bold ">SUBJECT</span>
          <input
            type="text"
            name="subject"
            placeholder="Email Subject"
            className="input input-bordered bg-transparent w-full"
            required
          />
        </div>
        <div className="w-full max-w-xs p-1">
          <span className="bg-transparent font-bold text-left">MESSAGE</span>
          <textarea
            name="message"
            className="textarea bg-transparent textarea-bordered w-full"
            placeholder="Message Details"
          ></textarea>
        </div>
        <div className="w-full max-w-xs pt-3 text-center">
          <SecondaryButton>
            {" "}
            <input type="submit" value="send" className="font-bold uppercase font-mono" />
          </SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export default Email;
