import { useEffect } from 'react'
import Interceptor from './Interceptor'

export default function useFetch(url: string, interceptor?: Interceptor) {
  const { preProcess, postProcess, errorHandler } = interceptor || {}
  useEffect(() => {
    ;(async () => {
      preProcess && preProcess()
      console.log(`get ${url}`)
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json()
        postProcess && postProcess(json)
        console.log(`ok`)
      } else {
        errorHandler && errorHandler(response.status)
        console.log(`error`)
      }
    })()
  }, [url, preProcess, postProcess, errorHandler])
}
