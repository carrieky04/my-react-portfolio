import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/Contact.css";

export default function App() {
  const {
    register,
    formState: { errors },
    // handleSubmit,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="contact-form">
      <form
        action="https://getform.io/f/0dfe046c-1aeb-4129-8f85-5dcaf7cce74a"
        method="POST"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="contact-title">Contact Me</h1>
        <input
          placeholder="Full Name"
          type="text"
          name="name"
          {...register("fullName", { required: true })}
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName?.type === "required" && (
          <p role="alert">Full Name is required</p>
        )}
        <br />
        <input
          placeholder="Email"
          type="email"
          name="email"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
        <br />
        <textarea placeholder="Message" rows="10" name="message" />
        <br />
        <button type="submit" variant="contained" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
}
