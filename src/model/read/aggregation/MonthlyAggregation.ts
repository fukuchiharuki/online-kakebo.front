import AccountItem from "./AccountItem";

export default class MonthlyAggregation {
  month!: string;
  data!: AccountItem[];

  constructor(init: Partial<MonthlyAggregation>) {
    Object.assign(this, { ...init, data: init.data?.map(it => new AccountItem(it)) });
  }

  totalAmount(): number {
    return this.data
      .map(it => it.amount)
      .reduce((acc, amount) => acc + amount, 0);
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
