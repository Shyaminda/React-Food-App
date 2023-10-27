import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TableBooking.css'; // Import the CSS file

const TableBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '1',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add your logic here)
    axios.post("http://localhost:3001/tableBooking",{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests
    })
    .then(res=>{console.log(res.data);
    clearForm();})
    .catch(err=>console.log(err));
  };

  return (
    <div className="container">
      <h2 className="heading">Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="date">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="time">
            Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="guests">
            Number of Guests:
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="input"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit" className="button">
          Book Now
        </button>
        <p className="signUpLink">
                Already have an account? <Link to="/login">Sign Up</Link>
            </p>
      </form>
    </div>
  );
};

export default TableBooking;
