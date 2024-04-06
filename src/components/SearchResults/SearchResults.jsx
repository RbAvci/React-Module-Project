import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import "./SearchResults.scss";

const SearchResults = ({ bookings }) => {
  const [selectedProfileId, setSelectedProfile] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  function handleShowProfile(e) {
    setSelectedProfile(Number(e.target.value));
  }

  function handleSort(key) {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  }

  const sortedBookings = [...bookings].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
  });

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <TableHead handleSort={handleSort} sortConfig={sortConfig} />
        </thead>
        <tbody>
          {sortedBookings.map((booking) => (
            <TableBody
              key={booking.id}
              booking={booking}
              handleShowProfile={handleShowProfile}
            />
          ))}
        </tbody>
      </table>
      {selectedProfileId ? <CustomerProfile id={selectedProfileId} /> : null}
    </div>
  );
};

export default SearchResults;
