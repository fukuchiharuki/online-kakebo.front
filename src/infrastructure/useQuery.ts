import useFetch from './useFetch'
import { useCallback, useState } from 'react'
import Interceptor, { useInterceptorMerge } from './Interceptor'

export type QueryState<T> = {
  isLoading: boolean
  data: T | null
}

export type Converter<T> = (json: any) => T

function useQuery<T>(
  url: string,
  converter?: Converter<T>,
  interceptor?: Interceptor
): QueryState<T> {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const requestInterceptor = useRequestInterceptor(
    setData,
    setLoading,
    useConverterDefine(converter),
    interceptor
  )
  useFetch(url, requestInterceptor)
  return { isLoading, data }
}

function useConverterDefine<T>(converter?: Converter<T>): Converter<T> {
  const defaultConverter = useCallback((json) => json as T, [])
  return converter || defaultConverter
}

function useRequestInterceptor<T>(
  setData: (data: T | null) => void,
  setLoading: (isLoading: boolean) => void,
  converter: Converter<T>,
  interceptor?: Interceptor
): Interceptor {
  const requestInterceptor = {
    preProcess: useCallback(() => {
      setLoading(true)
    }, [setLoading]),
    postProcess: useCallback((json) => {
      setData(converter(json))
      setLoading(false)
    }, [converter, setData, setLoading]),
  } as Interceptor
  return useInterceptorMerge(requestInterceptor, interceptor)
}

export default useQuery
