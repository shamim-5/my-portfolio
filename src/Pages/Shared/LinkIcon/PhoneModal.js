import React from "react";

const PhoneModal = () => {
  return (
    <div className="text-primary">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle bg-transparent md:w-1/3 md:mx-auto md:mr-32">
        <div className="modal-box bg-black">
          <h3 className="text-lg font-bold">For Further Inquery? Please Call !</h3>
          <p className="py-4 text-warning font-bold text-3xl font-mono">+880 1950-402657</p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn bg-primary text-white border-none btn-sm hover:bg-transparent hover:text-primary"
            >
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
