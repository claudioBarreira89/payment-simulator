import React from "react";

import RCSlider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

class Slider extends React.Component {
  render() {
    const { minValue, maxValue, value, step, handleChange } = this.props;

    return (
      <RCSlider
        min={minValue}
        max={maxValue}
        value={value}
        step={step}
        onChange={handleChange}
      />
    );
  }
}

export default Slider;
