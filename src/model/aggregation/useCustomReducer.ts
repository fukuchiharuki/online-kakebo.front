import { useReducer } from 'react';
import Aggregation from './Aggregation';

enum ActionType {
  FETCH,
  FETCHED
}

interface FetchAction {
  type: typeof ActionType.FETCH;
}

export function fetchAction(): FetchAction {
  return { type: ActionType.FETCH };
}

interface FetchedAction {
  type: typeof ActionType.FETCHED;
  payload: { json: any; };
}

export function fetchedAction(json: any): FetchedAction {
  return { type: ActionType.FETCHED, payload: { json } };
}

type State = {
  isLoading: boolean;
  data: Aggregation;
}

const initialState = {
  isLoading: false,
  data: Aggregation.empty()
};

type Action = FetchAction | FetchedAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.FETCH:
      return { ...state, isLoading: true };
    case ActionType.FETCHED:
      const data = new Aggregation({ values: action.payload.json });
      return { ...state, data, isLoading: false };
  }
}

export default function useCustomReducer() {
  return useReducer(reducer, initialState);
}
