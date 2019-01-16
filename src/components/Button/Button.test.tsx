import * as React from "react";
import { shallow } from "enzyme";
import { Button } from "./";

const node = <Button />

describe("Testing <Button/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});