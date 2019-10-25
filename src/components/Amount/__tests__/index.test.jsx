import React from "react";
import { mount } from "enzyme";

import Amount from "../index";

describe("<Amount />", () => {
  it("should receive the correct props", () => {
    const wrapper = mount(<Amount amount={100} label={"Test"} type={"%"} />);

    expect(wrapper.props().amount).toEqual(100);
    expect(wrapper.props().label).toEqual("Test");
    expect(wrapper.props().type).toEqual("%");
  });
});
