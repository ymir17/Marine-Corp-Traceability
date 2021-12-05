import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import traceabilityReducer from './traceabilityReducer';

const reducers = combineReducers({
  traceabilityReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
