import { RouterProps } from 'App';
import useFetch, { DataSource } from 'model/read/aggregation/useFetch';

type Props = RouterProps;

function Dashboard(props: Props) {
  const dataSouce = dataSource(props.location.search);
  const aggregation = useFetch(dataSouce);
  console.log(aggregation);
  return (
    <div>Online KAKEBO</div>
  );
}

function dataSource(search: string): DataSource {
  const urlSearchParams = new URLSearchParams(search)
  const script = urlSearchParams.get("script")!;
  const data = urlSearchParams.get("data")!;
  return new DataSource({ script, data });
}

export default Dashboard;
