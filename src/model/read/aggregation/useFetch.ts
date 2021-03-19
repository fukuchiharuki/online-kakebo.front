import { useEffect, useState } from "react";
import Aggregation from "./Aggregation";

export class DataSource {
  script!: string;
  data!: string;

  constructor(init: Partial<DataSource>) {
    Object.assign(this, init);
  }

  aggregation(): string {
    return this.url("aggregation");
  }

  url(resource: string): string {
    return `https://script.google.com/macros/s/${this.script}/exec?resource=${resource}&id=${this.data}`;
  }
};

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
