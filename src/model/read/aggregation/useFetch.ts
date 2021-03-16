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
  accountItem!: AccountItemType;
  amount!: number;

  constructor(init: Partial<AccountItem>) {
    Object.assign(this, init);
  }
}

enum AccountItemType {
  食費 = "食費",
  食費_個別 = "食費(個別)",
  日用品費 = "日用品費",
  娯楽費 = "娯楽費",
  医療費 = "医療費",
  水道光熱費 = "水道光熱費",
  通信費 = "通信費",
  住居費 = "住居費",
  特別費 = "特別費",
  元入金 = "元入金",
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
