export default class DataSource {
  script!: string
  data!: string

  constructor(init: Partial<DataSource>) {
    Object.assign(this, init)
  }

  aggregation(): string {
    return this.url('aggregation')
  }

  entries(): string {
    return this.url('entries')
  }

  private url(resource: string): string {
    return `https://script.google.com/macros/s/${this.script}/exec?resource=${resource}&id=${this.data}`
  }
}
