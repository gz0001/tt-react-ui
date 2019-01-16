import * as React from "react";
import { shallow } from "enzyme";
import { Selectbox } from "./";

const node = <div></div>

describe("Testing <Textfield/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});