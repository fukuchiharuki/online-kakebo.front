export default class CursorRange {
  length!: number

  constructor(length: number) {
    this.length = length
  }

  hasNext(current: number): boolean {
    return this.isInRange(current + 1)
  }

  hasPrev(current: number): boolean {
    return this.isInRange(current - 1)
  }

  private isInRange(cursor: number): boolean {
    return -this.length < cursor && cursor <= 0
  }
}
