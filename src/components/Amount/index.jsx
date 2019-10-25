import React from "react";
import styled from "styled-components";

import { formatNumber } from "../../utils/functions";

const StyledAmount = styled.div`
  display: flex;

  > div {
    flex: 1;
  }

  .label {
    display: flex;
    align-items: center;

    h3 {
      ${props => props.small && `font-size: 20px; margin-bottom: 10px;`}
    }
  }

  .amount {
    font-weight: 600;

    h1 {
      ${props => props.small && `font-size: 25px; margin-bottom: 10px;`}
      text-align: right;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

class Amount extends React.Component {
  render() {
    const { amount, label, type = "€", small } = this.props;

    return (
      <StyledAmount small={small}>
        <div className="label">
          <h3>{label}</h3>
        </div>
        <div className="amount">
          <h1>
            {formatNumber(amount)} {type}
          </h1>
        </div>
      </StyledAmount>
    );
  }
}

export default Amount;
