import React from "react";
import { connect } from "react-redux";

import Container from "../../components/Container";
import Slider from "../../components/Slider";
import Amount from "../../components/Amount";
import config from "../../config/index.json";
import { changeAmount, getSimulation } from "../../store/actions";

class SliderSection extends React.Component {
  componentDidMount() {
    const { calculateSimulation } = this.props;
    calculateSimulation();
  }

  handleChange = v => {
    const { changeAmountValue, calculateSimulation } = this.props;
    changeAmountValue(v);
    calculateSimulation();
  };

  render() {
    const { amount } = this.props;
    return (
      <Container small>
        <Amount label={"Select your amount"} amount={amount} />
        <Slider
          minValue={config.slider.minValue}
          maxValue={config.slider.maxValue}
          step={config.slider.step}
          value={amount}
          handleChange={this.handleChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({ amount: state.amount });

const mapDispatchToProps = dispatch => ({
  calculateSimulation: () => dispatch(getSimulation()),
  changeAmountValue: amount => dispatch(changeAmount(amount))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderSection);
