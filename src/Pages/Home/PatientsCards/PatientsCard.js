import React from "react";

const PatientsCard = ({ patientsCard }) => {
  const { description, location, name, image } = patientsCard;
  return (
    <div className="card w-96 shadow-xl ">
      <div className="card-body ">
        <p className="my-6 text-left">{description}</p>
        <div className="flex items-center  ">
          <img
            className="mr-4 avatar rounded-full ring ring-primary"
            src={image}
            alt=""
          />
          <div>
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
