import { Fragment } from 'react';
import { RouterProps } from 'App';
import useFetch from 'model/aggregation/useFetch';
import MonthlySummaryView from 'model/aggregation/view/MonthlySummaryView';
import DataSource from 'infrastructure/DataSource';
import MonthlyDetailsView from 'model/aggregation/view/MonthlyDetailsView';
import Today from 'model/date/Today';

type Props = RouterProps;

function Dashboard(props: Props) {
  const dataSouce = dataSource(props.location.search);
  const { isLoading, data } = useFetch(dataSouce);
  if (isLoading || data.isEmpty()) return <Fragment>Now loading...</Fragment>;
  const currentMonthAggregation = data.currentMonth();
  return (
    <Fragment>
      <header>
        <h1>Online KAKEBO</h1>
      </header>
      <hr />
      <div>
        <h2>今月</h2>
        <p>(残り {new Today().restOfCurrentMonth()} 日)</p>
        <MonthlySummaryView>{currentMonthAggregation.asSummary()}</MonthlySummaryView>
        <h3>内訳</h3>
        <MonthlyDetailsView>{currentMonthAggregation}</MonthlyDetailsView>
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
