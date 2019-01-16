import * as React from "react";
import { shallow } from "enzyme";
import { Row } from "./";

const node = <Row></Row>

describe("Testing <Row/>", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(node)
    expect(wrapper.length).toBe(1);
  });
});