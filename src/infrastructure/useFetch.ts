import { useCallback, useEffect } from 'react'

export default function useFetch(url: string, callback?: Callback) {
  const { preProcess, postProcess, errorHandler } = callback || {}
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
        errorHandler && errorHandler()
        console.log(`error`)
      }
    })()
  }, [url, preProcess, postProcess, errorHandler])
}

export type Callback = {
  preProcess?: () => void
  postProcess?: (json: any) => void
  errorHandler?: () => void
}

export function useMergedCallback(a?: Callback, b?: Callback): Callback {
  const { 
    preProcess: aPreProcess, 
    postProcess: aPostProcess, 
    errorHandler: aErrorHandler 
  } = a || {}
  const { 
    preProcess: bPreProcess, 
    postProcess: bPostProcess, 
    errorHandler: bErrorHandler 
  } = b || {}
  return {
    preProcess: useCallback(() => {
      aPreProcess && aPreProcess()
      bPreProcess && bPreProcess()
    }, [aPreProcess, bPreProcess]),
    postProcess: useCallback((json: any) => {
      aPostProcess && aPostProcess(json)
      bPostProcess && bPostProcess(json)
    }, [aPostProcess, bPostProcess]),
    errorHandler: useCallback(() => {
      aErrorHandler && aErrorHandler()
      bErrorHandler && bErrorHandler()
    }, [aErrorHandler, bErrorHandler]),
  } as Callback
}
