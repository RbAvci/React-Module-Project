import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    console.log("Component is mounted");
    fetch("https://nw6-cyf-hotel.glitch.me/fakebookings")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching bookings:", error);
        setLoading(false); 
      });
  }, []); 

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />

 
      {loading && <p>Loading...</p>}

      {!loading && <SearchResults bookings={bookings} />}
    </main>
  );
};

export default Bookings;
