import { useState } from "react";
import "./Search.scss";
import SearchButton from "../SearchButton/SearchButton";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  return (
    <section className="search">
      <header className="search__header">
        <h4 className="search__heading heading">Search Bookings</h4>
      </header>
      <form className="search__form">
        <label className="search__label" htmlFor="customerName">
          &rarr;
        </label>
        <input
          type="search"
          id="customerName"
          className="search__input"
          placeholder="Customer name"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <SearchButton />
      </form>
    </section>
  );
};

export default Search;
