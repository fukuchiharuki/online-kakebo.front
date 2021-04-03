import MonthlyAggregation from 'model/aggregation/MonthlyAggregation';
import MonthlyDetailsView from 'model/aggregation/view/MonthlyDetailsView';
import MonthlySummaryView from 'model/aggregation/view/MonthlySummaryView';
import CurrentMonthCursor from './CurrentMonthCursor';

type Props = {
  monthCursor: React.ReactNode
  monthlyAggregation: MonthlyAggregation
}

function MonthlySummaryTable(props: Props) {
  const { monthCursor, monthlyAggregation } = props;
  return (
    <div>
      {monthCursor}
      <MonthlySummaryView>{monthlyAggregation.asSummary()}</MonthlySummaryView>
      <h3>内訳</h3>
      <MonthlyDetailsView>{monthlyAggregation}</MonthlyDetailsView>
    </div>
  );
}

export default MonthlySummaryTable;
