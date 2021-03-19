import MonthlySummary from "./MonthlySummary";
import MonthlyAggregation from "./MonthlyAggregation";

export default class Aggregation {
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
