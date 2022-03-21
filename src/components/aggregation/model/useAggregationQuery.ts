import DataSource from 'infrastructure/DataSource'
import useQuery from 'infrastructure/useQuery'
import { useCallback } from 'react'
import Aggregation, { asAggregation } from './Aggregation'

function useAggregationQuery(dataSource: DataSource) {
  const url = dataSource.aggregation()
  const converter = useCallback(
    (json: any) => asAggregation({ values: json }),
    []
  )
  return useQuery<Aggregation>(url, converter)
}

export default useAggregationQuery
