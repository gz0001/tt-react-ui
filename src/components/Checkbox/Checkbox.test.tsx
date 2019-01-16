import * as React from "react";
import { shallow } from "enzyme";
import { Checkbox } from "./";

const node = <Checkbox checked={false} label="Checkbox" onCheck={() => true}></Checkbox>

describe("Testing <Checkbox/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});