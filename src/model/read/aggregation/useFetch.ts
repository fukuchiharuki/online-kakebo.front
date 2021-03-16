import { useEffect, useState } from "react";

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

class Aggregation {
  values!: MonthlyAggregation[];

  constructor(init: Partial<Aggregation>) {
    Object.assign(this, { values: init.values?.map(it => new MonthlyAggregation(it)) });
  }
}

class MonthlyAggregation {
  month!: string;
  data!: AccountItem[];

  constructor(init: Partial<MonthlyAggregation>) {
    Object.assign(this, { ...init, data: init.data?.map(it => new AccountItem(it)) });
  }
}

class AccountItem {
  accountItem!: string;
  amount!: number;

  constructor(init: Partial<AccountItem>) {
    Object.assign(this, init);
  }
}

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
