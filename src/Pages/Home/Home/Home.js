import { Container } from "postcss";
import React from "react";
import Banner from "../Banner/Banner";
import PatientsCards from "../PatientsCards/PatientsCards";
import Services from "../Services/Services";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";
import InfoCards from "./InfoCards/InfoCards";
import MakeAppointment from "./MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <About></About>
      <MakeAppointment></MakeAppointment>
      <PatientsCards></PatientsCards>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
