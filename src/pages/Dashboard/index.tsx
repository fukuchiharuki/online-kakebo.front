import Aggregation from 'components/aggregation/model/Aggregation';
import WithLoading from 'components/ui/WithLoading';
import { QueryState } from 'infrastructure/useQuery';
import { useHistory, useLocation } from 'react-router';
import CurrentMonthCursor from './CurrentMonthCursor';
import CursorParams from './CursorParams';
import MonthlySummaryTable from './MonthlySummaryTable';
import SpecifiedMonthCursor from './SpecifiedMonthCursor';

type Props = {
  state: QueryState<Aggregation>
};

function Dashboard(props: Props) {
  const { isLoading, data } = props.state;
  const history = useHistory();
  const location = useLocation();
  const cursorParams = new CursorParams(location.search);
  return (
    <WithLoading if={isLoading || data == null}>{() => {
      const aggregation = data!!
      const cursorRange = aggregation.cursorRange();
      const cursorProps = {
        cursorParams, cursorRange,
        onPrevClick: () => history.push({ pathname: ".", search: cursorParams.prevSearch() }),
        onNextClick: () => history.push({ pathname: ".", search: cursorParams.nextSearch() })
      };
      const monthCursor = cursorParams.isCurrentMonth()
        ? <CurrentMonthCursor {...cursorProps} />
        : <SpecifiedMonthCursor {...cursorProps} />
      const monthlyAggregation = cursorParams.isCurrentMonth()
        ? aggregation.currentMonth()
        : aggregation.cursorMonth(cursorParams.cursor());
      const props = { monthCursor, monthlyAggregation };
      return <MonthlySummaryTable {...props} />
    }}</WithLoading>
  );
}

export default Dashboard;
