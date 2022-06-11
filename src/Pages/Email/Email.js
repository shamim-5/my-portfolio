import React from "react";
import SecondaryButton from "../Shared/SecondaryButton/SecondaryButton";
import "./Email.css";

const Email = () => {
  return (
    <div className="bg-neutral w-full max-w-xs mx-auto py-6   my-6 px-4 flex flex-col justify-center items-center rounded-md text-primary border">
      <form className="w-full">
        <div class="w-full p-1">
          <span className="bg-transparent font-bold ">NAME</span>
          <input type="text" placeholder="Your Name" class="input input-bordered bg-transparent w-full" />
        </div>
        <div class="w-full p-1">
          <span className="bg-transparent font-bold ">EMAIL</span>
          <input type="Email" placeholder="info@site.com" class="input input-bordered bg-transparent w-full" required />
        </div>
        <div class="w-full max-w-xs p-1">
          <span className="bg-transparent font-bold ">SUBJECT</span>
          <input type="text" placeholder="Email Subject" class="input input-bordered bg-transparent w-full" required />
        </div>
        <div class="w-full max-w-xs p-1">
          <span className="bg-transparent font-bold text-left">MESSAGE</span>
          <textarea class="textarea bg-transparent textarea-bordered w-full" placeholder="Message Details"></textarea>
        </div>
        <div class="w-full max-w-xs pt-3 text-center">
          <SecondaryButton>
            {" "}
            <input type="submit" value="submit" class="font-bold uppercase font-sans" />
          </SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export default Email;
