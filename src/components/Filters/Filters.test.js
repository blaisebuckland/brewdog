import { shallow } from "enzyme";
import React from "react";

import Filters from "./Filters";

describe("Filters tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Filters />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render 3 div elements", () => {
    expect(component.find("div").length).toEqual(3);
  });

  it("should render radio input elements", () => {
    expect(component.find("input").at(0).prop("type")).toBe("radio");
  });

  it("should render a label element for each input", () => {
    expect(component.find("label").length).toEqual(3);
  });

  it("should render the correct label for the input", () => {
    <label for="classic">Clasic range </label>;
    expect(component.find("label").at(1).text()).toBe("Classic range ");
  });
});
