import DataSource from 'infrastructure/DataSource'
import useQuery from 'infrastructure/useQuery'
import { useCallback } from 'react'
import Entries, { asEntries } from './Entries'

function useEntriesQuery(dataSource: DataSource) {
  const url = dataSource.entries()
  const converter = useCallback((json: any) => asEntries(json), [])
  return useQuery<Entries>(url, converter)
}

export default useEntriesQuery
