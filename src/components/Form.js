import "./FormStyle.css";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" onChange={handleChange} name="firstName"></input>
        <label>Email</label>
        <input type="email" onChange={handleChange} name="lastName"></input>
        <label>Subject</label>
        <input type="text" onChange={handleChange} name="email"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          onChange={handleChange}
          name="message"
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
