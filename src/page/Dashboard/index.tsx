import { State } from 'model/aggregation/useModel';
import { useLocation } from 'react-router';
import OrLoading from 'ui/OrLoading';
import CurrentMonthCursor from './CurrentMonthCursor';
import CursorParams from './CursorParams';
import MonthlySummaryTable from './MonthlySummaryTable';
import SpecifiedMonthCursor from './SpecifiedMonthCursor';

type Props = {
  state: State
};

function Dashboard(props: Props) {
  const { isLoading, data } = props.state;
  const location = useLocation();
  const cursorParams = new CursorParams(location.search);
  return (
    <OrLoading if={isLoading || data.isEmpty()}>{() => {
      const cursorRange = data.cursorRange();
      const cursorProps = { cursorParams, cursorRange };
      const monthCursor = cursorParams.isCurrentMonth()
        ? <CurrentMonthCursor {...cursorProps} />
        : <SpecifiedMonthCursor {...cursorProps} />
      const monthlyAggregation = cursorParams.isCurrentMonth()
        ? data.currentMonth()
        : data.cursorMonth(cursorParams.cursor());
      const props = { monthCursor, monthlyAggregation };
      return <MonthlySummaryTable {...props} />
    }}</OrLoading>
  );
}

export default Dashboard;
