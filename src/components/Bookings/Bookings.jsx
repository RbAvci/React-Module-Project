import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import AddBookingForm from "../AddBookingForm/AddBookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("Component is mounted");
    fetch("https://nw6-cyf-hotel.glitch.me/fakebookings")
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error("Error fetching bookings:", error));
  }, []);

  const search = (searchVal) => {
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults bookings={bookings} />
      <AddBookingForm bookings={bookings} setBookings={setBookings} />
    </main>
  );
};

export default Bookings;
