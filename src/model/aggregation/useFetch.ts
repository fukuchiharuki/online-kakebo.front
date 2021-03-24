import { useEffect, useReducer } from "react";
import DataSource from "infrastructure/DataSource";
import reducer from './reducer';
import { initialState, fetchAction, fetchedAction, errorAction } from './reducer';

function useFetch(dataSource: DataSource) {
  const url = dataSource.aggregation();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    (async () => {
      dispatch(fetchAction());
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json();
        dispatch(fetchedAction(json));
      } else {
        dispatch(errorAction());
      }
    })();
  }, [url])
  return state;
}

export default useFetch;
