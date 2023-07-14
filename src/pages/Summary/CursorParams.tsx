import CursorRange from 'components/aggregation/model/CursorRange'

export default class CursorParams {
  search!: string

  constructor(search: string) {
    this.search = search
  }

  isCurrentMonth(): boolean {
    return this.cursor() === 0
  }

  cursor(): number {
    const urlSearchParams = new URLSearchParams(this.search)
    return parseInt(urlSearchParams.get('cursor')!) || 0
  }

  hasNext(range: CursorRange): boolean {
    return range.hasNext(this.cursor())
  }

  hasPrev(range: CursorRange): boolean {
    return range.hasPrev(this.cursor())
  }

  nextSearch(): string {
    return this.offsetSearch(1)
  }

  prevSearch(): string {
    return this.offsetSearch(-1)
  }

  private offsetSearch(offset: number): string {
    const searchParams = new URLSearchParams(this.search)
    searchParams.set('cursor', (this.cursor() + offset).toString())
    return searchParams.toString()
  }
}
