import config from "../config/index.json";
import actionTypes from "./constants.js";
import { calculateSimulation, checkAvailablePlans } from "../utils/functions";

export const initialState = {
  amount: config.initialAmount,
  term: config.initialTerm,
  simulation: {
    installment: 0,
    totalInterest: 0,
    totalAmount: 0
  },
  availablePlans: config.termCards
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_AMOUNT: {
      return {
        ...state,
        amount: action.payload
      };
    }
    case actionTypes.CHANGE_TERM: {
      return {
        ...state,
        term: action.payload
      };
    }
    case actionTypes.GET_SIMULATION: {
      const values = calculateSimulation(
        state.amount,
        state.term,
        config.interest
      );

      const availablePlans = checkAvailablePlans(
        state.amount,
        config.termCards,
        config.interest
      );

      return {
        ...state,
        simulation: {
          ...values
        },
        availablePlans
      };
    }
    default: {
      return state;
    }
  }
};
