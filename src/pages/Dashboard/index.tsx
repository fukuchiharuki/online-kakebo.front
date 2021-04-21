import { State } from 'components/aggregation/model/useModel';
import OrLoading from 'components/ui/OrLoading';
import { useHistory, useLocation } from 'react-router';
import CurrentMonthCursor from './CurrentMonthCursor';
import CursorParams from './CursorParams';
import MonthlySummaryTable from './MonthlySummaryTable';
import SpecifiedMonthCursor from './SpecifiedMonthCursor';

type Props = {
  state: State
};

function Dashboard(props: Props) {
  const { isLoading, data } = props.state;
  const history = useHistory();
  const location = useLocation();
  const cursorParams = new CursorParams(location.search);
  return (
    <OrLoading if={isLoading || data.isEmpty()}>{() => {
      const cursorRange = data.cursorRange();
      const cursorProps = {
        cursorParams, cursorRange,
        onPrevClick: () => history.push({ pathname: ".", search: cursorParams.prevSearch() }),
        onNextClick: () => history.push({ pathname: ".", search: cursorParams.nextSearch() })
      };
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
