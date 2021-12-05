import { Dispatch } from 'redux';
import {
  Action,
  ActionType,
} from './actionTypes';
import { FishingTrip, FishingEquipment, Traceability, Traceabilities } from '../interfaces';

export const setFirst = (data: Traceability) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GET_FIRST,
    payload: data,
  });
};

export const setSecond = (data:FishingTrip) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GET_SECOND,
    payload: data, 
  });
};

export const setThird = (data:FishingEquipment) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.GET_THIRD,
    payload: data,
  });
};

export const setError = (data:string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.ERROR,
    payload: data,
  });
};

export const setTraceabilities = (data:Traceabilities) => (dispatch:Dispatch<Action>) => {
  dispatch({
    type: ActionType.GET_TRACEABILITIES,
    payload: data,
  });

};