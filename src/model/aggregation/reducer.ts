import Aggregation from './Aggregation';

type State = {
  isLoading: boolean;
  data: Aggregation;
}

export const initialState = {
  isLoading: false,
  data: Aggregation.empty()
};

enum ActionType {
  FETCH,
  FETCHED
}

interface FetchAction {
  type: typeof ActionType.FETCH;
}

interface FetchedAction {
  type: typeof ActionType.FETCHED;
  payload: { json: any; };
}

type Action = FetchAction | FetchedAction;

export function fetchAction(): FetchAction {
  return { type: ActionType.FETCH };
}

export function fetchedAction(json: any): FetchedAction {
  return { type: ActionType.FETCHED, payload: { json } };
}

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.FETCH:
      return { ...state, isLoading: true };
    case ActionType.FETCHED:
      const data = new Aggregation({ values: action.payload.json });
      return { ...state, data, isLoading: false };
  }
}
