import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader.jsx";

describe('AppHeader', () => {
  test('renders the logo and heading correctly', () => {
    render(<AppHeader />);

   
    const logoImage = screen.getByAltText('hotel Logo');
    expect(logoImage).toBeInTheDocument();

   
    const headingText = screen.getByText('CYF Hotel');
    expect(headingText).toBeInTheDocument();
  });
});