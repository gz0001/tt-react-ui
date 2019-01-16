import * as React from "react";
import { shallow } from "enzyme";
import { Col } from "./";

const node = <Col></Col>

describe("Testing <Col/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});