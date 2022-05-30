import AccountItem, { asAccountItem } from './AccountItem'
import AccountItemType from './AccountItemType'
import MonthlySummary from './MonthlySummary'

type MonthlyAggregation = {
  month: string
  data: AccountItem[]
  asSummary(): MonthlySummary
  totalAmount(): number
  accountItemTypes(): AccountItemType[]
  categories(): AccountItemType[]
  filterByCategory(accountItemType: AccountItemType): MonthlyAggregation
  filterByAccountItemType(accountItemType: AccountItemType): MonthlyAggregation
  filter収入(): MonthlyAggregation
  filter支出(): MonthlyAggregation
  filter特別費(): MonthlyAggregation
}

export default MonthlyAggregation

export function asMonthlyAggregation(o: any): MonthlyAggregation {
  const newObject = Object.create({
    ...o,
    data: o.data.map((it: any) => asAccountItem(it)),
  })
  Object.assign(newObject, extension)
  return newObject
}

const extension = {
  asSummary(): MonthlySummary {
    return MonthlySummary.of(this)
  },

  totalAmount(): number {
    return this.data
      .map((it) => it.amount)
      .reduce((acc, amount) => acc + amount, 0)
  },

  accountItemTypes(): AccountItemType[] {
    return this.data
      .map((it) => it.accountItem)
      .reduce(
        (acc, type) =>
          acc.includes(type) ? acc : acc.concat(type),
        [] as AccountItemType[]
      )
  },

  categories(): AccountItemType[] {
    return this.data
      .map((it) => it.category())
      .reduce(
        (acc, category) =>
          acc.includes(category) ? acc : acc.concat(category),
        [] as AccountItemType[]
      )
  },

  filterByCategory(accountItemType: AccountItemType): MonthlyAggregation {
    return asMonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.categoryIs(accountItemType)),
    })
  },

  filterByAccountItemType(
    accountItemType: AccountItemType
  ): MonthlyAggregation {
    return asMonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.is(accountItemType)),
    })
  },

  filter収入(): MonthlyAggregation {
    return asMonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.is収入()),
    })
  },

  filter支出(): MonthlyAggregation {
    return asMonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => !it.is収入()),
    })
  },

  filter特別費(): MonthlyAggregation {
    return asMonthlyAggregation({
      month: this.month,
      data: this.data.filter((it) => it.is特別費()),
    })
  },
} as MonthlyAggregation
