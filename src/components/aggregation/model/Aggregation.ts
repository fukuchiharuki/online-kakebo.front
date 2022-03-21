import CursorRange from './CursorRange'
import MonthlyAggregation, { asMonthlyAggregation } from './MonthlyAggregation'

type Aggregation = {
  values: MonthlyAggregation[]
  isEmpty(): boolean
  cursorRange(): CursorRange
  cursorMonth(cursor: number): MonthlyAggregation
  currentMonth(): MonthlyAggregation
}

export default Aggregation

export function asAggregation(o: any): Aggregation {
  Object.setPrototypeOf(o, prototype)
  o.values?.forEach((it: any) => asMonthlyAggregation(it))
  return o
}

const prototype = {
  isEmpty(): boolean {
    return this.values.length === 0
  },

  cursorRange(): CursorRange {
    return new CursorRange(this.values.length)
  },

  cursorMonth(cursor: number): MonthlyAggregation {
    return this.values.slice(cursor - 1)[0]
  },

  currentMonth(): MonthlyAggregation {
    return this.cursorMonth(0)
  },
} as Aggregation
