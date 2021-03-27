import { useReducer } from "react";
import DataSource from "infrastructure/DataSource";
import reducer from './reducer';
import { initialState, fetchAction, fetchedAction } from './reducer';
import useFetch from 'infrastructure/useFetch';
import { Callback } from "infrastructure/useFetch";

function useQuery(dataSource: DataSource) {
  const url = dataSource.aggregation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const callback: Callback = {
    preProcess: () => dispatch(fetchAction()),
    postProcess: (json) => dispatch(fetchedAction(json))
  }
  useFetch(url, callback);
  return state;
}

export default useQuery;
