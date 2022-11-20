import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control my-2 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-600"> {errors.password.message}</p>
          )}
        </div>
        <div className="form-control my-2 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600"> {errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a Specialty
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
        <input
          className="btn btn-accent my-4 w-full"
          value="Add Doctor"
          type="submit"
        />
        {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
