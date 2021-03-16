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

class MonthlySummary {
  value!: MonthlyAggregation;

  private constructor(init: MonthlyAggregation) {
    this.value = init;
  }

  static of(init: MonthlyAggregation): MonthlySummary {
    return new MonthlySummary(init);
  }

  収入() {
    return this.value.filter収入().totalAmount();
  }

  支出() {
    return this.value.filter支出().totalAmount();
  }

  特別費() {
    return this.value.filter特別費().totalAmount();
  }

  特別費を除いた支出() {
    return this.支出() - this.特別費();
  }

  特別費を含めない差引() {
    return this.収入() - this.特別費を除いた支出();
  }

  特別費を含めた差引() {
    return this.収入() - this.支出();
  }
}

class Aggregation {
  values!: MonthlyAggregation[];

  constructor(init: Partial<Aggregation>) {
    Object.assign(this, { values: init.values?.map(it => new MonthlyAggregation(it)) });
  }

  isEmpty(): boolean {
    return this.values.length == 0;
  }

  currentMonthSummary(): MonthlySummary {
    const currentMonthAggregation = this.values.slice(-1)[0];
    return MonthlySummary.of(currentMonthAggregation);
  }
}

class MonthlyAggregation {
  month!: string;
  data!: AccountItem[];

  constructor(init: Partial<MonthlyAggregation>) {
    Object.assign(this, { ...init, data: init.data?.map(it => new AccountItem(it)) });
  }

  totalAmount(): number {
    return this.data
      .map(it => it.amount)
      .reduce((acc, amount) => acc + amount);
  }

  filter収入(): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter(it => it.is収入())
    });
  }
  
  filter支出(): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter(it => !it.is収入()) 
    });
  }

  filter特別費(): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter(it => it.is特別費())
    });
  }
}

class AccountItem {
  accountItem!: AccountItemType;
  amount!: number;

  constructor(init: Partial<AccountItem>) {
    Object.assign(this, init);
  }

  is収入(): boolean {
    return behaviorOf(this.accountItem).is収入();
  }

  is特別費(): boolean {
    return behaviorOf(this.accountItem).is特別費();
  }

  category(): AccountItemType {
    return behaviorOf(this.accountItem).category();
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

function behaviorOf(accountItemType: AccountItemType) {
  switch (accountItemType) {
    case AccountItemType.食費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.食費 };
    case AccountItemType.食費_個別:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.食費 };
    case AccountItemType.日用品費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.日用品費 };
    case AccountItemType.娯楽費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.娯楽費 };
    case AccountItemType.医療費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.医療費 };
    case AccountItemType.水道光熱費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.水道光熱費 };
    case AccountItemType.通信費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.通信費 };
    case AccountItemType.住居費:
      return { is収入: () => false, is特別費: () => false, category: () => AccountItemType.住居費 };
    case AccountItemType.特別費:
      return { is収入: () => false, is特別費: () => true, category: () => AccountItemType.特別費 };
    case AccountItemType.元入金:
      return { is収入: () => true, is特別費: () => false, category: () => AccountItemType.元入金 };
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
