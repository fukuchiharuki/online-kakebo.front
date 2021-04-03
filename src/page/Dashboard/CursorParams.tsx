import CursorRange from "model/aggregation/CursorRange";

export default class CursorParams {
  search!: string;

  constructor(search: string) {
    this.search = search;
  }

  isCurrentMonth(): boolean {
    return this.cursor() === 0;
  }

  cursor(): number {
    const urlSearchParams = new URLSearchParams(this.search);
    return parseInt(urlSearchParams.get("cursor")!) || 0;
  }

  hasNext(range: CursorRange): boolean {
    return range.hasNext(this.cursor());
  }

  hasPrev(range: CursorRange): boolean {
    return range.hasPrev(this.cursor());
  }

  nextSearch(): object {
    return this.offsetSearch(1);
  }

  prevSearch(): object {
    return this.offsetSearch(-1);
  }

  private offsetSearch(offset: number): object {
    const urlSearchParams = new URLSearchParams(this.search);
    urlSearchParams.set("cursor", (this.cursor() + offset).toString())
    return Array.from(urlSearchParams.entries()).reduce((acc, item) => Object.assign({}, acc, {[item[0]]: item[1]}), {});
  }
}
