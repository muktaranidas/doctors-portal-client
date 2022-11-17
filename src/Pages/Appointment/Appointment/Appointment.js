import React, { useState } from "react";
// import MakeAppointment from "../../Home/Home/MakeAppointment/MakeAppointment";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppoints from "../AvailableAppointments/AvailableAppoints";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppoints
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AvailableAppoints>
    </div>
  );
};

export default Appointment;
