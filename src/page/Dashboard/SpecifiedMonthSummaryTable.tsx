import CursorRange from 'model/aggregation/CursorRange';
import MonthlyAggregation from 'model/aggregation/MonthlyAggregation';
import MonthlyDetailsView from 'model/aggregation/view/MonthlyDetailsView';
import MonthlySummaryView from 'model/aggregation/view/MonthlySummaryView';
import CursorParams from './CursorParams';
import SpecifiedMonthCursor from './SpecifiedMonthCursor';

type Props = {
  cursorParams: CursorParams
  cursorRange: CursorRange
  monthlyAggregation: MonthlyAggregation
}

function SpecifiedMonthSummaryTable(props: Props) {
  const { cursorParams, cursorRange, monthlyAggregation } = props;
  return (
    <div>
      <SpecifiedMonthCursor {...{ cursorParams, cursorRange }} />
      <MonthlySummaryView>{monthlyAggregation.asSummary()}</MonthlySummaryView>
      <h3>内訳</h3>
      <MonthlyDetailsView>{monthlyAggregation}</MonthlyDetailsView>
    </div>
  );
}

export default SpecifiedMonthSummaryTable;
