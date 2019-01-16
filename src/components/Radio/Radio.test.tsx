import * as React from "react";
import { shallow } from "enzyme";
import { Radio } from "./";

const node = <Radio checked={false} label="Radio" onCheck={() => true}></Radio>

describe("Testing <Radio/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});