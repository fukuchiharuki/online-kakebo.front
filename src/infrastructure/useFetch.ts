import { useEffect } from 'react'

export default function useFetch(url: string, callback: Callback) {
  const { preProcess, postProcess, errorHandler } = callback
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
