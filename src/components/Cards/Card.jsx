import React from "react";
import styled from "styled-components";

import RadioButton from "../RadioButton";

const StyledCard = styled.div`
  cursor: pointer;
  padding: 5px;
  flex: 1;

  .cardContent {
    border-radius: 7px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
    padding: 20px;
    text-align: center;

    :hover {
      background-color: #dffeff55;
    }

    h1 {
      font-size: 48px;
      font-weight: 600;
    }
  }

  @media (max-width: 500px) {
    flex: 1 0 50%;
    .cardContent {
      padding: 15px 10px;
    }
  }
`;

class Card extends React.Component {
  render() {
    const { value, active, handleClick } = this.props;

    return (
      <StyledCard
        active={active}
        onClick={() => handleClick(value)}
        data="card-component"
      >
        <div className="cardContent">
          <h1>{value}</h1>
          months
          <RadioButton active={active} />
        </div>
      </StyledCard>
    );
  }
}

export default Card;
