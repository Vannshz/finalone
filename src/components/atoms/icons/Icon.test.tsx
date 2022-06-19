import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Logo from "./Icons";
import  {createRoot} from 'react-dom/client';
import React from "react";

import App from "../../../App";
import  ReactDOM  from "react-dom/client";
 
describe("Should display logo", () => {
  test("Display logo", () => {

  
    render(<Logo />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });
});
