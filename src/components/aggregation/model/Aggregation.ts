import CursorRange from './CursorRange'
import MonthlyAggregation from './MonthlyAggregation'

export default class Aggregation {
  values!: MonthlyAggregation[]

  constructor(init: Partial<Aggregation>) {
    Object.assign(this, {
      values: init.values?.map((it) => new MonthlyAggregation(it)),
    })
  }

  static empty(): Aggregation {
    return new Aggregation({ values: [] })
  }

  isEmpty(): boolean {
    return this.values.length === 0
  }

  cursorRange(): CursorRange {
    return new CursorRange(this.values.length)
  }

  cursorMonth(cursor: number): MonthlyAggregation {
    return this.values.slice(cursor - 1)[0]
  }

  currentMonth(): MonthlyAggregation {
    return this.cursorMonth(0)
  }
}
