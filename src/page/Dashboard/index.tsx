import { RouterProps } from 'App';
import useQuery from 'model/aggregation/useQuery';
import DataSource from 'infrastructure/DataSource';
import OrLoading from 'ui/OrLoading';
import CurrentMonthSummaryTable from './CurrentMonthSummaryTable';

type Props = RouterProps;

function Dashboard(props: Props) {
  const dataSouce = dataSource(props.location.search);
  const { isLoading, data } = useQuery(dataSouce);
  return (
    <OrLoading if={isLoading || data.isEmpty()}>{() => {
      const currentMonthAggregation = data.currentMonth();
      return <CurrentMonthSummaryTable monthlyAggregation={currentMonthAggregation} />
    }}</OrLoading>
  );
}

function dataSource(search: string): DataSource {
  const urlSearchParams = new URLSearchParams(search)
  const script = urlSearchParams.get("script")!;
  const data = urlSearchParams.get("data")!;
  return new DataSource({ script, data });
}

export default Dashboard;
