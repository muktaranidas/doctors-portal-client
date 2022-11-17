import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format, formatDistanceToNow } from "date-fns";
import bgImage from "./../../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header style={{ background: `url(${bgImage})`, backgroundSize: "cover" }}>
      <div className="hero my-24 ">
        <div className="hero-content flex flex-col  justify-between  lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div className="mr-32">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
