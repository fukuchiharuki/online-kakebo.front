import DataSource from "infrastructure/DataSource";
import useFetch, { Callback } from 'infrastructure/useFetch';
import { useCallback } from "react";
import useModel, { fetchAction, fetchedAction } from './useModel';

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
