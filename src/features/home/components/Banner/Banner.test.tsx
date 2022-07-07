import React from "react";

import { render, screen } from "@testing-library/react";

import Banner from "./Banner";

describe("Banner", () => {
  it("Should render the banner text correctly", () => {
    render(<Banner text="Banner text" />);
    const bannerText = screen.getByText("Banner text");
    expect(bannerText).toBeInTheDocument();
  });
});
