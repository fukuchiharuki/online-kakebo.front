import { Fragment } from 'react';
import { RouterProps } from 'App';
import useFetch from 'model/read/aggregation/useFetch';
import MonthlySummaryView from 'model/read/aggregation/view/MonthlySummaryView';
import DataSource from 'infrastructure/DataSource';

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
        <MonthlySummaryView>{currentMonthSummary}</MonthlySummaryView>
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
