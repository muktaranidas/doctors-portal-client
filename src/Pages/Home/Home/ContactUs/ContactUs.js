import React from "react";
import appointment from "../../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="text-center mt-28 py-6">
        <h2 className="text-secondary font-bold mt-12">Contact use</h2>
        <h2 className="text-4xl text-white ">Stay connected with ussss</h2>
      </div>
      <div className=" pb-28">
        <form className="grid grid-cols-1 align-items-center justify-items-center ">
          <input
            type="text"
            placeholder="Email address"
            className="input input-bordered input-primary w-96		 my-4"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-primary   w-96		 my-4"
          />
          <textarea
            className="textarea textarea-primary my-4 w-96"
            placeholder="Your message"
          ></textarea>
          <button className="btn btn-primary mt-12 w-1/8 px-12">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
