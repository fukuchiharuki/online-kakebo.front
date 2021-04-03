import CursorRange from 'model/aggregation/CursorRange';
import MonthlyAggregation from 'model/aggregation/MonthlyAggregation';
import MonthlyDetailsView from 'model/aggregation/view/MonthlyDetailsView';
import MonthlySummaryView from 'model/aggregation/view/MonthlySummaryView';
import CurrentMonthCursor from './CurrentMonthCursor';
import CursorParams from './CursorParams';

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
  monthlyAggregation: MonthlyAggregation
}

function CurrentMonthSummaryTable(props: Props) {
  const { cursorParams, cursorRange, monthlyAggregation } = props;
  return (
    <div>
      <CurrentMonthCursor {...{ cursorParams, cursorRange }} />
      <MonthlySummaryView>{monthlyAggregation.asSummary()}</MonthlySummaryView>
      <h3>内訳</h3>
      <MonthlyDetailsView>{monthlyAggregation}</MonthlyDetailsView>
    </div>
  );
}

export default CurrentMonthSummaryTable;
