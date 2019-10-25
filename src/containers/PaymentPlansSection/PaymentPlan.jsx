import React from "react";

import {
  CaretDown,
  ToggleButton,
  PaymentsTableContainer,
  PaymentsTable
} from "./styles";
import { formatNumber } from "../../utils/functions";

class PaymentPlan extends React.Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    const { isVisible } = this.state;
    const { term, simulation } = this.props;

    return (
      <>
        {isVisible && (
          <PaymentsTableContainer>
            <h2>{term} months</h2>
            <PaymentsTable>
              {simulation.paymentPlan &&
                simulation.paymentPlan.map((v, i) => (
                  <div key={i} className="tableRow">
                    <div>
                      <span>Month</span>
                      <h4>{v.month}</h4>
                    </div>
                    <div>
                      <span>Capital</span>
                      <h4>{formatNumber(v.capital)} €</h4>
                    </div>
                    <div>
                      <span>Interest</span>
                      <h4>{formatNumber(v.interest)} €</h4>
                    </div>
                    <div>
                      <span>Installment</span>
                      <h4>{formatNumber(v.installment)} €</h4>
                    </div>
                  </div>
                ))}
            </PaymentsTable>
          </PaymentsTableContainer>
        )}
        <ToggleButton onClick={this.handleClick}>
          <p>
            <CaretDown isOpen={isVisible} />
            {isVisible
              ? "Hide Payment plan details"
              : "View Payment plan details"}
          </p>
        </ToggleButton>
      </>
    );
  }
}

export default PaymentPlan;
