import MonthlySummaryView from 'model/aggregation/view/MonthlySummaryView';
import MonthlyDetailsView from 'model/aggregation/view/MonthlyDetailsView';
import Today from 'model/date/Today';
import MonthlyAggregation from 'model/aggregation/MonthlyAggregation';

type Props = {
  monthlyAggregation: MonthlyAggregation
}

function CurrentMonthSummaryTable(props: Props) {
  const { monthlyAggregation } = props;
  return (
    <div>
      <h2>今月</h2>
      <p>(残り {new Today().restOfCurrentMonth()} 日)</p>
      <MonthlySummaryView>{monthlyAggregation.asSummary()}</MonthlySummaryView>
      <h3>内訳</h3>
      <MonthlyDetailsView>{monthlyAggregation}</MonthlyDetailsView>
    </div>
  );
}

export default CurrentMonthSummaryTable;
