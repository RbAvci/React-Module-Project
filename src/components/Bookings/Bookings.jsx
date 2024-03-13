import { useState } from "react";
import Search from "@/components/Search/Search";
import FakeBookings from "@/data/fakeBookings.json";
import SearchResults from "../SearchResults/SearchResults";

const Bookings = () => {
  const [error, setError] = useState(null); // State to track error

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  // Function to fetch data and handle errors
  const fetchData = async () => {
    // In this case, we are not fetching data from the server,
    // So we don't need to handle errors here.
    // But we will modify this function if we need to fetch data from an API.
  };

  return (
    <main className="bookings">
      <Search search={search} />
      {/* To display error message if error state is not null */}
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <SearchResults results={FakeBookings} />
      )}
    </main>
  );
};

export default Bookings;
