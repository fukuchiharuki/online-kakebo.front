import useFetch, { Callback, useMergedCallback } from './useFetch'
import { useCallback, useState } from 'react'

export type QueryState<T> = {
  isLoading: boolean
  data: T | null
}

export type Converter<T> = (json: any) => T

function useQuery<T>(
  url: string,
  converter?: Converter<T>,
  callback?: Callback
): QueryState<T> {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const requestCallback = useRequestCallback(
    setData,
    setLoading,
    useDefinedConverter(converter),
    callback
  )
  useFetch(url, requestCallback)
  return { isLoading, data }
}

function useDefinedConverter<T>(converter?: Converter<T>): Converter<T> {
  const defaultConverter = useCallback((json) => json as T, [])
  return converter || defaultConverter
}

function useRequestCallback<T>(
  setData: (data: T | null) => void,
  setLoading: (isLoading: boolean) => void,
  converter: Converter<T>,
  callback?: Callback
): Callback {
  const requestCallback = {
    preProcess: useCallback(() => {
      setLoading(true)
    }, [setLoading]),
    postProcess: useCallback((json) => {
      setData(converter(json))
      setLoading(false)
    }, [converter, setData, setLoading]),
  } as Callback
  return useMergedCallback(requestCallback, callback)
}

export default useQuery
