import DataSource from './DataSource';

export default class DataSourceParams {
  search!: string;

  constructor(search: string) {
    this.search = search;
  }

  validate(): boolean {
    const urlSearchParams = new URLSearchParams(this.search);
    return !![
      urlSearchParams.get("script"),
      urlSearchParams.get("data")
    ].reduce((acc, param) => acc && param);
  }

  dataSource(): DataSource {
    const urlSearchParams = new URLSearchParams(this.search)
    const script = urlSearchParams.get("script")!;
    const data = urlSearchParams.get("data")!;
    return new DataSource({ script, data });
  }
}
