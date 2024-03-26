import React, { useState } from "react";
import Search from "../Search/Search";
import FakeBookings from "../../data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";
import AddBookingForm from "../AddBookingForm/AddBookingForm";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

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
      <Search className="searchBtn" search={search} />

      <SearchResults bookings={bookings} />
      <AddBookingForm bookings={bookings} setBookings={setBookings} />
    </main>
  );
};

export default Bookings;
