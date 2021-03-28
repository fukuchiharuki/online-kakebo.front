import { useCallback } from "react";
import DataSource from "infrastructure/DataSource";
import useModel, { fetchAction, fetchedAction } from './useModel';
import useFetch from 'infrastructure/useFetch';
import { Callback } from "infrastructure/useFetch";

function useQuery(dataSource: DataSource) {
  const url = dataSource.aggregation();
  const [state, dispatch] = useModel();
  const callback: Callback = {
    preProcess: useCallback(() => dispatch(fetchAction()), [dispatch]),
    postProcess: useCallback((json) => dispatch(fetchedAction(json)), [dispatch])
  }
  useFetch(url, callback);
  return state;
}

export default useQuery;
