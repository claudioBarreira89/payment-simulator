import React from "react";
import { connect } from "react-redux";

import Container from "../../components/Container";
import Cards from "../../components/Cards";
import { changeTerm, getSimulation } from "../../store/actions";

class TermsSection extends React.Component {
  handleClick = v => {
    const { changeTermValue, calculateSimulation } = this.props;
    changeTermValue(v);
    calculateSimulation();
  };

  render() {
    const { term, availablePlans } = this.props;
    return (
      <Container small>
        <h3>Select term</h3>
        <Cards
          cards={availablePlans}
          activeCard={term}
          handleClick={this.handleClick}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  term: state.term,
  availablePlans: state.availablePlans
});

const mapDispatchToProps = dispatch => ({
  calculateSimulation: () => dispatch(getSimulation()),
  changeTermValue: term => dispatch(changeTerm(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermsSection);
