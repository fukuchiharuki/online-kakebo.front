import CursorRange from './CursorRange'
import MonthlyAggregation, { asMonthlyAggregation } from './MonthlyAggregation'

type Aggregation = {
  isEmpty(): boolean
  cursorRange(): CursorRange
  cursorMonth(cursor: number): MonthlyAggregation
  currentMonth(): MonthlyAggregation
} & Array<MonthlyAggregation>

export default Aggregation

export function asAggregation(o: any): Aggregation {
  const newObject = Object.create(
    o.map((it: any) => asMonthlyAggregation(it))
  )
  Object.assign(newObject, extension)
  return newObject
}

const extension = {
  isEmpty(): boolean {
    return this.length === 0
  },

  cursorRange(): CursorRange {
    return new CursorRange(this.length)
  },

  cursorMonth(cursor: number): MonthlyAggregation {
    return this.slice(cursor - 1)[0]
  },

  currentMonth(): MonthlyAggregation {
    return this.cursorMonth(0)
  },
} as Aggregation
