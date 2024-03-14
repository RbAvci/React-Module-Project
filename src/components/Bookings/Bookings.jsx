import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import FakeBookings from "../../data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    try {
      // hwill replace with actual API call
      setBookings(FakeBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    // Add search functionality here
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults bookings={bookings} />
    </main>
  );
};

export default Bookings;
