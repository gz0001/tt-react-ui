import * as React from "react";
import { shallow } from "enzyme";
import { Headline } from "./";

const node = <Headline>Headline</Headline>

describe("Testing <Headline/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});