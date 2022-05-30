import CursorRange from './CursorRange'
import MonthlyAggregation, { asMonthlyAggregation } from './MonthlyAggregation'

type Aggregation = {
  isEmpty(): boolean
  cursorRange(): CursorRange
  cursorMonth(cursor: number): MonthlyAggregation
  currentMonth(): MonthlyAggregation
  差引累計Data(): number[]
  差引累計ChartData(): ChartData
  収支ChartData(): ChartData
} & Array<MonthlyAggregation>

export default Aggregation

export function asAggregation(o: any): Aggregation {
  const newObject = Object.create(o.map((it: any) => asMonthlyAggregation(it)))
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

  差引累計Data(): number[] {
    return this.map((it) => it.asSummary().特別費を含めた差引()).reduce(
      (acc: number[], n: number) => {
        if (acc.length === 0) return [n]
        return acc.concat([acc[acc.length - 1] + n])
      },
      []
    )
  },

  差引累計ChartData(): ChartData {
    const labels = this.map((it) => it.month).slice(-12)
    const data = this.差引累計Data().slice(-12)
    return {
      labels,
      datasets: [
        {
          label: '差引',
          backgroundColor: colors[1],
          borderColor: colors[1],
          data,
        },
      ],
    }
  },

  収支ChartData(): ChartData {
    const labels = this.map((it) => it.month).slice(-12)
    const 収入Data = this.map((it) => it.asSummary().収入()).slice(-12)
    const 特別費を除いた支出Data = this.map((it) =>
      it.asSummary().特別費を除いた支出()
    ).slice(-12)
    const 特別費Data = this.map((it) => it.asSummary().特別費()).slice(-12)
    return {
      labels,
      datasets: [
        {
          label: '収入',
          data: 収入Data,
          backgroundColor: colors[1],
          stack: 'income',
        },
        {
          label: '支出',
          data: 特別費を除いた支出Data,
          backgroundColor: colors[2],
          stack: 'outgo',
        },
        {
          label: '特別費',
          data: 特別費Data,
          backgroundColor: colors[3],
          stack: 'outgo',
        },
      ],
    }
  },
} as Aggregation

const colors = [
  'rgb(50, 151, 121)',
  'rgb(111, 192, 136)',
  'rgb(212, 180, 131)',
  'rgb(145, 119, 64)',
]

type ChartData = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string
    borderColor?: string
    stack?: string
  }[]
}
