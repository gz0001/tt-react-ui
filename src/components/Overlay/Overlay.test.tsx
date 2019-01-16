import * as React from "react";
import { shallow } from "enzyme";
import { Overlay } from "./";

const node = <Overlay open={true}></Overlay>

describe("Testing <Overlay/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});