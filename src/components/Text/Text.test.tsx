import * as React from "react";
import { shallow } from "enzyme";
import { Text } from "./";

const node = <Text>Text</Text>

describe("Testing <Text/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});