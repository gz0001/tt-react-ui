import * as React from "react";
import { shallow } from "enzyme";
import { ScrollTop } from "./";

const node = <div><ScrollTop></ScrollTop></div>

describe("Testing <ScrollTop/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});