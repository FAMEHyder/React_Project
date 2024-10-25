import React, { useState } from "react";


export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: 0,
    email: "",
    phone_no: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
       ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in with:", formData);
    alert(
      `Username: ${formData.username}\nAge: ${formData.age}\nEmail: ${formData.email}\nPhone_no: ${formData.phone_no}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Registration</h1>
        <label htmlFor="username">Full Name : </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="age">Age : </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="email">Gmail : </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone_no">Phone Number : </label>
        <input
          type="number"
          id="phone_no"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Register;