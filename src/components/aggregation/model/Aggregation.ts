import { specOf } from './AccountItemType'
import CursorRange from './CursorRange'
import MonthlyAggregation, { asMonthlyAggregation } from './MonthlyAggregation'

type Aggregation = {
  isEmpty(): boolean
  cursorRange(): CursorRange
  cursorMonth(cursor: number): MonthlyAggregation
  currentMonth(): MonthlyAggregation
  差異ChartData(): ChartData
  支出ChartData(): ChartData
  推移ChartData(): ChartData
  支出割合ChartData(months: number): ChartData
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

  差異ChartData(): ChartData {
    const labels = this.map((it) => it.month).slice(-12)
    const 予実差異Data = this.map((it) =>
      it.asSummary().特別費を含めない差異()
    ).slice(-12)
    const 特別費込Data = this.map((it) =>
      it.asSummary().特別費を含めた差異()
    ).slice(-12)
    return {
      labels,
      datasets: [
        {
          label: '予実差異',
          backgroundColor: colors[0],
          borderColor: colors[0],
          data: 予実差異Data,
        },
        {
          label: '特別費込',
          backgroundColor: colors[1],
          borderColor: colors[1],
          data: 特別費込Data,
          hidden: true,
        },
      ],
    }
  },

  支出ChartData(): ChartData {
    const labels = this.map((it) => it.month).slice(-12)
    const 特別費を含めない支出Data = this.map((it) =>
      it.asSummary().特別費を含めない支出()
    ).slice(-12)
    const 特別費Data = this.map((it) => it.asSummary().特別費()).slice(-12)
    return {
      labels,
      datasets: [
        {
          label: '支出',
          data: 特別費を含めない支出Data,
          backgroundColor: colors[0],
          stack: 'outgo',
        },
        {
          label: '特別費',
          data: 特別費Data,
          backgroundColor: colors[1],
          stack: 'outgo',
          hidden: true,
        },
      ],
    }
  },

  推移ChartData(): ChartData {
    const labels = this.map((it) => it.month).slice(-12)
    const types = this[this.length - 1]
      .accountItemTypes()
      .filter((it) => !specOf(it).is予算())
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

  支出割合ChartData(months: number): ChartData {
    const labels = this[this.length - 1]
      .categories()
      .filter((it) => !specOf(it).is予算() && !specOf(it).is特別費())
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

const colors = ['rgb(81, 157, 233)', 'rgb(0, 102, 204)']

const manyColors = [
  'rgb(111, 192, 136)',
  'rgb(50, 151, 121)',
  'rgb(212, 180, 131)',
  'rgb(136, 204, 238)',
  'rgb(243, 140, 141)',
  'rgb(178, 176, 234)',
  'rgb(145, 119, 64)',
  'rgb(224, 193, 69)',
  'rgb(201, 25, 11)',
  'rgb(81, 157, 233)',
  'rgb(0, 0, 0)',
]

const pieColors = [
  'rgb(111, 192, 136)',
  'rgb(212, 180, 131)',
  'rgb(136, 204, 238)',
  'rgb(243, 140, 141)',
  'rgb(178, 176, 234)',
  'rgb(145, 119, 64)',
  'rgb(244, 182, 120)',
  'rgb(201, 25, 11)',
  'rgb(221, 204, 119)',
  'rgb(220, 220, 220)',
  'rgb(180, 180, 180)',
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
