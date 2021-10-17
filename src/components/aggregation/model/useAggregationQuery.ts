import DataSource from 'infrastructure/DataSource'
import useQuery from 'infrastructure/useQuery'
import { useCallback } from 'react'
import Aggregation from './Aggregation'

function useAggregationQuery(dataSource: DataSource) {
  const url = dataSource.aggregation()
  const converter = useCallback((json: any) => new Aggregation({ values: json }), [])
  return useQuery<Aggregation>(url, converter)
}

export default useAggregationQuery
