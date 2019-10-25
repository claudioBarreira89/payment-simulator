import React from "react";
import { connect } from "react-redux";

import Container from "../../components/Container";
import Amount from "../../components/Amount";
import PaymentPlan from "./PaymentPlan";
import config from "../../config/index.json";

class PaymentPlansSection extends React.Component {
  render() {
    const { simulation, term } = this.props;

    return (
      <Container>
        <Amount
          label={"Monthly Installment"}
          amount={simulation.installment}
          type={"€"}
        />
        <Amount label={"Interest"} amount={config.interest} type={"%"} small />
        <Amount
          label={"Total Interest"}
          amount={simulation.totalInterest}
          type={"€"}
          small
        />
        <Amount
          label={"Total Amount"}
          amount={simulation.totalAmount}
          type={"€"}
          small
        />
        <hr></hr>
        <PaymentPlan term={term} simulation={simulation} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.amount,
  term: state.term,
  simulation: state.simulation
});

export default connect(mapStateToProps)(PaymentPlansSection);
