import { shallow } from "enzyme";
import React from "react";

import Card from "./Card";
import beers from "../../data/beerData";

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<Card beer={testBeer} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render a title", () => {
    expect(component.find("h3").length).toEqual(1);
  });

  it("should render the correct title", () => {
    expect(component.find("h3").text()).toBe(testBeer.name);
  });

  it("should render a description", () => {
    expect(component.find("p").length).toEqual(1);
  });

  it("should render the correct description", () => {
    expect(component.find("p").text()).toBe(testBeer.description);
  });

  it("should render an image", () => {
    expect(component.find("img").length).toEqual(1);
  });

  it("should render the correct image", () => {
    expect(component.find("img").prop("src")).toBe(testBeer.image_url);
  });
});
