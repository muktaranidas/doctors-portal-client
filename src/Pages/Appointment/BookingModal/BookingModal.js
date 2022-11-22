import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  // treatment is just another name of appointmentOptions with name, slots, _id
  const { name: treatmentName, slots, price } = treatment;

  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

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
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };
    // console.log(booking);

    fetch("https://doctor-portal-server-livid.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
          <h3 className="text-lg font-bold text-center text-primary">
            {treatmentName}
          </h3>
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
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full  input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input w-full  input-bordered"
              defaultValue={user?.email}
              // readOnly
              disabled
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
