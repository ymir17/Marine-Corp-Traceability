// export const GET_TRACEABILITY = 'GET_TRACEABILITY';
import { FishingTrip, FishingEquipment, Traceability, Traceabilities } from '../interfaces';

export enum ActionType {
  GET_FIRST = 'GET_FIRST',
  GET_SECOND = 'GET_SECOND',
  GET_THIRD = 'GET_THIRD',
  GET_TRACEABILITIES = 'GET_TRACEABILITIES',
  ERROR = 'ERROR',
}

interface ActionGetFirst {
  type: ActionType.GET_FIRST,
  payload: Traceability,
}

interface ActionGetSecond {
  type: ActionType.GET_SECOND,
  payload: FishingTrip,
}

interface ActionGetThird {
  type: ActionType.GET_THIRD,
  payload: FishingEquipment,
}

interface ActionError {
  type: ActionType.ERROR,
  payload: string
}

interface ActionGetTraceabilities {
  type: ActionType.GET_TRACEABILITIES,
  payload: Traceabilities,
}

export type Action = ActionGetFirst | ActionGetSecond | ActionGetThird | ActionError | ActionGetTraceabilities;
export type TActionGetFirst = ActionGetFirst;
export type TActionGetSecond = ActionGetSecond;
export type TActionGetThird = ActionGetThird;
export type TActionGetTraceabilities = ActionGetTraceabilities;