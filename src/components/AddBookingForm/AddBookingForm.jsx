import React, { useState } from "react";
import "./AddBookingForm.scss";
import dayjs, { Dayjs } from "dayjs";

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

  const todaysDate =
    dayjs().get("year") +
    "-" +
    (dayjs().get("month") + 1).toString().padStart(2, "0") +
    "-" +
    dayjs().get("date");
  const maxDate =
    dayjs().get("year") +
    1 +
    "-" +
    (dayjs().get("month") + 1).toString().padStart(2, "0") +
    "-" +
    dayjs().get("date");

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateBooking = () => {
    if (!isNaN(parseInt(formData.firstName))) {
      alert("Enter a valid name");
    } else if (!isNaN(parseInt(formData.surname))) {
      alert("Enter a valid surname");
    } else if (
      !(
        formData.email.includes("@") &&
        formData.email.includes(".") &&
        formData.email.indexOf("@") === formData.email.lastIndexOf("@") &&
        formData.email.indexOf("@") < formData.email.lastIndexOf(".")
      )
    ) {
      alert("Enter a valid email");
    } else if (!(formData.roomId > 0 && formData.roomId < 100)) {
      alert("Enter a valid roon id");
    } else if (!(formData.checkInDate < formData.checkOutDate)) {
      alert("Enter valid dates");
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateBooking()) {
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
    }
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
        min={todaysDate}
        max={maxDate}
        placeholder="Check In Date"
        value={formData.checkInDate}
        onChange={handleChange}
      />
      <input
        required
        type="date"
        name="checkOutDate"
        min={todaysDate}
        max={maxDate}
        placeholder="Check Out Date"
        value={formData.checkOutDate}
        onChange={handleChange}
      />
      <input
        required
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
