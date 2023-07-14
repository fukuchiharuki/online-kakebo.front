import { specOf } from './AccountItemType'
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
  推移ChartData(): ChartData
  支出ChartData(months: number): ChartData
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

  推移ChartData(): ChartData {
    const labels = this.map((it) => it.month).slice(-12)
    const types = this[this.length - 1]
      .accountItemTypes()
      .filter((it) => !specOf(it).is収入())
      .filter((it) => !specOf(it).excluded())
    const datasets = types.map((type, i) => ({
      label: specOf(type).shortName(),
      data: this.map((it) =>
        it.filterByAccountItemType(type).totalAmount()
      ).slice(-12),
      backgroundColor: manyColors[i],
      borderColor: manyColors[i],
      hidden: specOf(type).hidden(),
    }))
    return { labels, datasets }
  },

  支出ChartData(months: number): ChartData {
    const labels = this[this.length - 1]
      .categories()
      .filter((it) => !specOf(it).is収入())
    const data = labels.map((category, i) => {
      const amounts = this.map((it) =>
        it.filterByCategory(category).totalAmount()
      )
        .slice(-(months + 1))
        .slice(0, months)
      return amounts.reduce((acc, a) => acc + a) / amounts.length
    })
    return {
      labels,
      datasets: [
        {
          label: '支出',
          data,
          backgroundColor: pieColors,
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

const manyColors = [
  'rgb(51, 34, 136)',
  'rgb(68, 170, 153)',
  'rgb(17, 119, 51)',
  'rgb(170, 68, 153)',
  'rgb(204, 102, 119)',
  'rgb(136, 204, 238)',
  'rgb(221, 204, 119)',
  'rgb(136, 34, 58)',
  'rgb(221, 221, 221)',
  'rgb(0, 0, 0)',
]

const pieColors = [
  'rgb(51, 34, 136)',
  'rgb(17, 119, 51)',
  'rgb(170, 68, 153)',
  'rgb(204, 102, 119)',
  'rgb(136, 204, 238)',
  'rgb(136, 34, 58)',
  'rgb(221, 204, 119)',
  'rgb(221, 221, 221)',
  'rgb(221, 221, 221)',
  'rgb(0, 0, 0)',
]

export type ChartData = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string
    stack?: string
    hidden?: boolean
  }[]
}
