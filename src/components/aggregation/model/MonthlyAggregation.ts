import AccountItem from './AccountItem'
import AccountItemType from './AccountItemType'
import MonthlySummary from './MonthlySummary'

export default class MonthlyAggregation {
  month!: string
  data!: AccountItem[]

  constructor(init: Partial<MonthlyAggregation>) {
    Object.assign(this, {
      ...init,
      data: init.data?.map((it) => new AccountItem(it)),
    })
  }

  asSummary(): MonthlySummary {
    return MonthlySummary.of(this)
  }

  totalAmount(): number {
    return this.data
      .map((it) => it.amount)
      .reduce((acc, amount) => acc + amount, 0)
  }

  categories(): AccountItemType[] {
    return this.data
      .map((it) => it.category())
      .reduce(
        (acc, category) =>
          acc.includes(category) ? acc : acc.concat(category),
        [] as AccountItemType[]
      )
  }

  filterByCategory(accountItemType: AccountItemType): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.categoryIs(accountItemType)),
    })
  }

  filterByAccountItemType(
    accountItemType: AccountItemType
  ): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.is(accountItemType)),
    })
  }

  filter収入(): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.is収入()),
    })
  }

  filter支出(): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => !it.is収入()),
    })
  }

  filter特別費(): MonthlyAggregation {
    return new MonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.is特別費()),
    })
  }
}
