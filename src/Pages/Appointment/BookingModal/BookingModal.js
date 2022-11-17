import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  // treatment is just another name of appointmentOptions with name, slots, _id
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    // [3, 4, 5].map((value, index) => console.log(value));
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-primary">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-8 mt-10"
          >
            <input
              value={date}
              disabled
              type="text"
              placeholder="Type here"
              className="input w-full  input-bordered"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              className="input w-full  input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input w-full  input-bordered"
            />
            <input
              name="phone"
              type="phone"
              placeholder="Your Phone"
              className="input w-full input-bordered"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
