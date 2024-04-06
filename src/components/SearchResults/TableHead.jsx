import React from "react";

const TableHead = ({ handleSort, sortConfig }) => {
  return (
    <tr>
      <th onClick={() => handleSort("id")}>
        ID{" "}
        {sortConfig.key === "id" &&
          (sortConfig.direction === "ascending" ? "▲" : "▼")}
      </th>
      <th onClick={() => handleSort("title")}>
        Title{" "}
        {sortConfig.key === "title" &&
          (sortConfig.direction === "ascending" ? "▲" : "▼")}
      </th>
      <th onClick={() => handleSort("firstName")}>
        First Name{" "}
        {sortConfig.key === "firstName" &&
          (sortConfig.direction === "ascending" ? "▲" : "▼")}
      </th>
      <th onClick={() => handleSort("surname")}>
        Last Name{" "}
        {sortConfig.key === "surname" &&
          (sortConfig.direction === "ascending" ? "▲" : "▼")}
      </th>
      <th onClick={() => handleSort("nights")}>
        Nights{" "}
        {sortConfig.key === "nights" &&
          (sortConfig.direction === "ascending" ? "▲" : "▼")}
      </th>
      <th onClick={() => handleSort("email")}>
        Email{" "}
        {sortConfig.key === "email" &&
          (sortConfig.direction === "ascending" ? "▲" : "▼")}
      </th>
    </tr>
  );
};

export default TableHead;
