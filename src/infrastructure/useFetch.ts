import { useEffect } from "react";

export default function useFetch(
  url: string,
  callback: Callback
) {
  const { preProcess, postProcess, errorHandler } = callback;
  useEffect(() => {
    (async () => {
      preProcess && preProcess();
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        postProcess && postProcess(json);
      } else {
        errorHandler && errorHandler();
      }
    })();
  }, [url, preProcess, postProcess, errorHandler]);
}

export type Callback = {
  preProcess?: () => void
  postProcess?: (json: any) => void
  errorHandler?: () => void
};
