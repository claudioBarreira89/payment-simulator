import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Cards extends React.Component {
  render() {
    const { cards, activeCard, handleClick } = this.props;
    return (
      <CardsContainer>
        {cards &&
          cards.map((v, i) => (
            <Card
              key={i}
              value={v}
              active={activeCard === v}
              handleClick={handleClick}
            >
              {v}
            </Card>
          ))}
      </CardsContainer>
    );
  }
}

export default Cards;
