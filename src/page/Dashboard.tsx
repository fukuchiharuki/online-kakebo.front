import { Fragment } from 'react';
import { RouterProps } from 'App';
import useFetch from 'model/read/aggregation/useFetch';
import DataSource from "infrastructure/DataSource";
import Amount from "ui/Amount";

type Props = RouterProps;

function Dashboard(props: Props) {
  const dataSouce = dataSource(props.location.search);
  const aggregation = useFetch(dataSouce);
  if (aggregation.isEmpty()) return <Fragment></Fragment>;
  const currentMonthSummary = aggregation.currentMonthSummary()
  return (
    <Fragment>
      <header>
        <h1>Online KAKEBO</h1>
      </header>
      <div>
        <h2>今月</h2>
        <dl className="current-month-summary">
          <dt>収入</dt>
          <dd><Amount>{currentMonthSummary.収入()}</Amount></dd>
          <dt>支出</dt>
          <dd><Amount>{currentMonthSummary.特別費を除いた支出()}</Amount></dd>
          <dd>(+ 特別費: <Amount>{currentMonthSummary.特別費()}</Amount>)</dd>
          <dt>差引</dt>
          <dd><Amount>{currentMonthSummary.特別費を含めた差引()}</Amount></dd>
          <dd>(特別費込: <Amount>{currentMonthSummary.特別費を含めた差引()}</Amount>)</dd>
        </dl>
      </div>
    </Fragment>
  );
}

function dataSource(search: string): DataSource {
  const urlSearchParams = new URLSearchParams(search)
  const script = urlSearchParams.get("script")!;
  const data = urlSearchParams.get("data")!;
  return new DataSource({ script, data });
}

export default Dashboard;
