import Aggregation from './Aggregation';

type State = {
  isLoading: boolean;
  data: Aggregation;
}

export const initialState = {
  isLoading: false,
  data: new Aggregation({ values: [] })
};

enum ActionType {
  FETCH,
  FETCHED,
  ERROR
}

interface FetchAction {
  type: typeof ActionType.FETCH;
  payload: {};
}

interface FetchedAction {
  type: typeof ActionType.FETCHED;
  payload: { json: any; };
}

interface ErrorAction {
  type: typeof ActionType.ERROR;
  payload: {};
}

type Action = FetchAction | FetchedAction | ErrorAction;

export function fetchAction(): FetchAction {
  return { type: ActionType.FETCH, payload: {} };
}

export function fetchedAction(json: any): FetchedAction {
  return { type: ActionType.FETCHED, payload: { json } };
}

export function errorAction(): ErrorAction {
  return { type: ActionType.ERROR, payload: {} };
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.FETCH:
      return { ...state, isLoading: true };
    case ActionType.FETCHED:
      const data = new Aggregation({ values: action.payload.json });
      return { ...state, data, isLoading: false };
    case ActionType.ERROR:
      return initialState;
  }
}
