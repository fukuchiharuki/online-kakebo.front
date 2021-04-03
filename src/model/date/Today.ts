class Today {
  value!: Date;

  constructor() {
    this.value = new Date();
  }

  restOfCurrentMonth(): number {
    const endOfCurrentMonth = new Date(this.value.getFullYear(), this.value.getMonth() + 1, 0);
    return Math.ceil((endOfCurrentMonth.getTime() - this.value.getTime()) / (24 * 60 * 60 * 1000));
  }

  cursorMonth(cursor: number): [number, number] {
    const date = new Date(this.value.getTime())
    for (let i = 0; i > cursor; i--) date.setDate(0);
    return [date.getFullYear(), date.getMonth() + 1];
  }
}

export default Today;
