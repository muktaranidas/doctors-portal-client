import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
import PatientsCard from "./PatientsCard";

const PatientsCards = () => {
  const patientsCardData = [
    {
      id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people1,
      name: " WinSon Herry",
      location: "California",
    },
    {
      id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people2,
      name: " WinSon Herry",
      location: "California",
    },
    {
      id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      image: people3,
      name: " WinSon Herry",
      location: "California",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary font-bold py-4 ">Testimonial</h1>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 ">
        {patientsCardData.map((patientsCard) => (
          <PatientsCard
            key={patientsCard.id}
            patientsCard={patientsCard}
          ></PatientsCard>
        ))}
      </div>
    </div>
  );
};

export default PatientsCards;
