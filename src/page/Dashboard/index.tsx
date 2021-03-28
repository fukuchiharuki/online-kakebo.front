import { State } from 'model/aggregation/useModel';
import OrLoading from 'ui/OrLoading';
import CurrentMonthSummaryTable from './CurrentMonthSummaryTable';

type Props = {
  state: State
};

function Dashboard(props: Props) {
  const { isLoading, data } = props.state;
  return (
    <OrLoading if={isLoading || data.isEmpty()}>{() => {
      const currentMonthAggregation = data.currentMonth();
      return <CurrentMonthSummaryTable monthlyAggregation={currentMonthAggregation} />
    }}</OrLoading>
  );
}

export default Dashboard;
