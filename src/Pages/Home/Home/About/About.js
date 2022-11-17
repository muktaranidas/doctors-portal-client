// import { transparent } from "daisyui/src/colors";
import React from "react";
import treatment from "../../../../assets/images/treatment.png";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

const About = () => {
  return (
    <div className="grid grid-cols lg:grid-cols-2  bg-base-100 my-24">
      <figure>
        <img className="w-1/2 mx-60" src={treatment} alt="" />
      </figure>
      <div className="font-bold w-9/12 py-12">
        <h2 className=" text-5xl font-bold">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p className=" py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get STARTED</PrimaryButton>
      </div>
    </div>
  );
};

export default About;
