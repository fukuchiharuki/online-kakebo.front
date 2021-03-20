class Today {
  value!: Date;

  constructor() {
    this.value = new Date();
  }

  restOfCurrentMonth(): number {
    const endOfCurrentMonth = new Date(this.value.getFullYear(), this.value.getMonth() + 1, 0);
    return Math.ceil((endOfCurrentMonth.getTime() - this.value.getTime()) / (24 * 60 * 60 * 1000));
  }
}

export default Today;
