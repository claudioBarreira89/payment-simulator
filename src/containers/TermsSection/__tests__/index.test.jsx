import React from "react";
import { mount, shallow } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { initialState } from "../../../store/reducer";
import TermsSection from "../index";

const mockStore = configureStore();
const store = mockStore(() => initialState);

describe("<TermsSection />", () => {
  it("should call handleClick", () => {
    const wrapper = shallow(
      <TermsSection.WrappedComponent
        changeTermValue={jest.fn()}
        calculateSimulation={jest.fn()}
      />
    );
    const spy = jest.spyOn(wrapper.instance(), "handleClick");

    wrapper.instance().handleClick();

    expect(spy).toHaveBeenCalled();
  });
});
