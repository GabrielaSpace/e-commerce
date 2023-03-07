import React from "react";
import { shallow } from "enzyme";
import ListProducts from "./ListProducts";

describe("ListProducts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListProducts />);
    expect(wrapper).toMatchSnapshot();
  });
});
