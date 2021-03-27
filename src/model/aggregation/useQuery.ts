import { useCallback } from "react";
import DataSource from "infrastructure/DataSource";
import useCustomReducer, { fetchAction, fetchedAction } from './useCustomReducer';
import useFetch from 'infrastructure/useFetch';
import { Callback } from "infrastructure/useFetch";

function useQuery(dataSource: DataSource) {
  const url = dataSource.aggregation();
  const [state, dispatch] = useCustomReducer();
  const callback: Callback = {
    preProcess: useCallback(() => dispatch(fetchAction()), []),
    postProcess: useCallback((json) => dispatch(fetchedAction(json)), [])
  }
  useFetch(url, callback);
  return state;
}

export default useQuery;
