import MonthlyAggregation from './MonthlyAggregation'

export default class MonthlySummary {
  value!: MonthlyAggregation

  private constructor(init: MonthlyAggregation) {
    this.value = init
  }

  static of(init: MonthlyAggregation): MonthlySummary {
    return new MonthlySummary(init)
  }

  予算() {
    return this.value.filter予算().totalAmount()
  }

  支出() {
    return this.value.filter支出().totalAmount()
  }

  特別費() {
    return this.value.filter特別費().totalAmount()
  }

  特別費を含めない支出() {
    return this.支出() - this.特別費()
  }

  特別費を含めない差異() {
    return this.予算() - this.特別費を含めない支出()
  }

  特別費を含めた差異() {
    return this.予算() - this.支出()
  }
}
