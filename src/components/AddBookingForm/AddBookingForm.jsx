import React, { useState } from "react";
import "./AddBookingForm.scss";

const AddBookingForm = ({ bookings, setBookings }) => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    surname: "",
    email: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });
  const [nextId, setNextId] = useState(bookings.length + 1);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { ...formData, id: nextId };
    addBooking(newBooking);
    setFormData({
      id: "",
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
    setNextId(nextId + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        name="surname"
        placeholder="Surname"
        value={formData.surname}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        required
        type="date"
        name="checkInDate"
        placeholder="Check In Date"
        value={formData.checkInDate}
        onChange={handleChange}
      />
      <input
        required
        type="date"
        name="checkOutDate"
        placeholder="Check Out Date"
        value={formData.checkOutDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="roomId"
        placeholder="Room ID"
        value={formData.roomId}
        onChange={handleChange}
      />
      <button type="submit">Book now</button>
    </form>
  );
};

export default AddBookingForm;
