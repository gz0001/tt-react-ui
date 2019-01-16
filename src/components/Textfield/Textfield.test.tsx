import * as React from "react";
import { shallow } from "enzyme";
import { Textfield } from "./";

const node = <Textfield onInput={() => null} value="value"/>

describe("Testing <Textfield/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});