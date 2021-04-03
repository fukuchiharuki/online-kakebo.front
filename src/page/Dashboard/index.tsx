import { State } from 'model/aggregation/useModel';
import { useLocation } from 'react-router';
import OrLoading from 'ui/OrLoading';
import CurrentMonthSummaryTable from './CurrentMonthSummaryTable';
import CursorParams from './CursorParams';
import SpecifiedMonthSummaryTable from './SpecifiedMonthSummaryTable';

type Props = {
  state: State
};

function Dashboard(props: Props) {
  const { isLoading, data } = props.state;
  const location = useLocation();
  const cursorParams = new CursorParams(location.search);
  const cursorRange = data.cursorRange();
  return (
    <OrLoading if={isLoading || data.isEmpty()}>{() => {
      const monthlyAggregation = (cursorParams.isCurrentMonth())
        ? data.currentMonth()
        : data.cursorMonth(cursorParams.cursor())
      return (cursorParams.isCurrentMonth())
        ? <CurrentMonthSummaryTable {...{ cursorParams, cursorRange, monthlyAggregation }} />
        : <SpecifiedMonthSummaryTable {...{ cursorParams, cursorRange, monthlyAggregation }} />
    }}</OrLoading>
  );
}

export default Dashboard;
