import { Action, ActionType } from '../actions/actionTypes';
import { State } from '../interfaces';

const initialState: State = {
  traceabilities:[],
  traceability: {
    fishingtripId: null,
  },
  fishingtrip: {
    id: null,
    startDate: '',
    endDate: '',
    boat: {
      name: '',
      imguri: '',
      freeze_trawler: null,
      fishingequipmentid: null,
    },
    treatedby: {
      homepage: '',
      name: '',
      description: '',
      imguri: '',
      logouri: '',
    },
    fish: {
      name: '',
      description: '',
      imguri: '',
    },
    location: {
      name: null,
    },
    harbour: {
      name: '',
      latitude: null,
      longitude: null,
    },
  },
  fishingequipment: {
    name: null,
  },
  isLoading: true,
  error: '',
};

export default (state: State = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionType.GET_FIRST:
      if (payload != undefined) {
        return {
          ...state,
          ...payload as any,
        };
      }
      return state;
    case ActionType.GET_SECOND:
      if (payload != undefined) {
        return {
          ...state,
          ...payload as any,
        };
      }
      return state;
    case ActionType.GET_THIRD:
      if (payload != undefined) {
        return {
          ...state,
          ...payload as any,
          isLoading: false,
        };
      }
      return state;
    case ActionType.ERROR:
      return {
        ...state,
        error: payload,
      };
    case ActionType.GET_TRACEABILITIES :
      if (payload != undefined){
        return {
          ...state,
          ...payload as any,
          error:payload,
        };
      }
      return state;
    default:
      return state;
  }
};
