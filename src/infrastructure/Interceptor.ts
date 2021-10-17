import { useCallback } from 'react'

type Interceptor = {
  preProcess?: () => void
  postProcess?: (json: any) => void
  errorHandler?: (status: number) => void
}

export default Interceptor

export function useInterceptorMerge(
  a?: Interceptor,
  b?: Interceptor
): Interceptor {
  const {
    preProcess: aPreProcess,
    postProcess: aPostProcess,
    errorHandler: aErrorHandler,
  } = a || {}
  const {
    preProcess: bPreProcess,
    postProcess: bPostProcess,
    errorHandler: bErrorHandler,
  } = b || {}
  return {
    preProcess: useCallback(() => {
      aPreProcess && aPreProcess()
      bPreProcess && bPreProcess()
    }, [aPreProcess, bPreProcess]),
    postProcess: useCallback(
      (json: any) => {
        aPostProcess && aPostProcess(json)
        bPostProcess && bPostProcess(json)
      },
      [aPostProcess, bPostProcess]
    ),
    errorHandler: useCallback(
      (status: number) => {
        aErrorHandler && aErrorHandler(status)
        bErrorHandler && bErrorHandler(status)
      },
      [aErrorHandler, bErrorHandler]
    ),
  } as Interceptor
}
