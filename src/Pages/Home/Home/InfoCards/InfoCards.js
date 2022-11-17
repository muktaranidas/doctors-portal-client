import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9:00 am to 5.00pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Mirpur 2, Sony Square",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "contact us now",
      description: "+000 1302564259",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
