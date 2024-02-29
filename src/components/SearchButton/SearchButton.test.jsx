
 import SearchButton from "./SearchButton";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Search Button", () => {
  it("renders a search button", () => {
    render(<SearchButton />);
    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument();
  });

  it("displays 'Search' text inside the button", () => {
    render(<SearchButton />);
    const searchButton = screen.getByRole("button");
    expect(searchButton).toHaveTextContent("Search");
  });

  it("has the correct class name", () => {
    render(<SearchButton />);
    const searchButton = screen.getByRole("button");
    expect(searchButton).toHaveClass("search__button");
  });

  it("has pointer cursor style", () => {
    render(<SearchButton />);
    const searchButton = screen.getByRole("button");
    const buttonStyles = window.getComputedStyle(searchButton);
    expect(buttonStyles.cursor).toBe("default");
  });
});

