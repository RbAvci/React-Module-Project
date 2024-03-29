import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import FakeBookings from "../../data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import AddBookingForm from "../AddBookingForm/AddBookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    try {
      // Replace with actual API call
      setBookings(FakeBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  const search = (searchVal) => {
    const filteredBookings = FakeBookings.filter(
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