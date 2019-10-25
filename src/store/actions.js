import { action } from "typesafe-actions";
import actionTypes from "./constants";

export const changeAmount = amount => action(actionTypes.CHANGE_AMOUNT, amount);
export const changeTerm = term => action(actionTypes.CHANGE_TERM, term);
export const getSimulation = () => action(actionTypes.GET_SIMULATION);
