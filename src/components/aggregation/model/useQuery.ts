import DataSource from 'infrastructure/DataSource'
import useFetch, { Callback } from 'infrastructure/useFetch'
import { useCallback } from 'react'
import useStore, { fetchAction, fetchedAction } from './useStore'

function useQuery(dataSource: DataSource) {
  const url = dataSource.aggregation()
  const [state, dispatch] = useStore()
  const callback: Callback = {
    preProcess: useCallback(() => dispatch(fetchAction()), [dispatch]),
    postProcess: useCallback((json) => dispatch(fetchedAction(json)), [
      dispatch,
    ]),
  }
  useFetch(url, callback)
  return state
}

export default useQuery
