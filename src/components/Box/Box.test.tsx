import * as React from "react";
import { shallow } from "enzyme";
import { Box } from "./";

const node = <Box />

describe("Testing <Box/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});