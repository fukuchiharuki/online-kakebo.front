import { useEffect, useState } from "react";
import Aggregation from "./Aggregation";
import DataSource from "infrastructure/DataSource";

const initialState = new Aggregation({ values: [] });

function useFetch(dataSource: DataSource) {
  const url = dataSource.aggregation();
  const [state, setState] = useState(initialState)
  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      if (response.ok) {
        const aggregation = new Aggregation({ values: await response.json() });
        setState(aggregation);
      } else {
        setState(initialState);
      }
    })();
  }, [url])
  return state;
}

export default useFetch;
