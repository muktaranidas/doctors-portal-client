import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="my-32" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="lg:w-1/2 hidden lg:block md:block rounded-lg shadow-2xl -mt-40"
          />
          <div className="text-white">
            <h1 className="text-primary text-lg font-bold py-4">Appointment</h1>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <PrimaryButton>Get STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
