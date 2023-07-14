import MonthlyAggregation from 'components/aggregation/model/MonthlyAggregation'
import MonthlyDetailsView from 'components/aggregation/MonthlyDetailsView'
import MonthlySummaryView from 'components/aggregation/MonthlySummaryView'

type Props = {
  monthCursor: React.ReactNode
  monthlyAggregation: MonthlyAggregation
}

function MonthlySummaryTable(props: Props) {
  const { monthCursor, monthlyAggregation } = props
  return (
    <div>
      {monthCursor}
      <h3>月間集計</h3>
      <MonthlySummaryView>{monthlyAggregation.asSummary()}</MonthlySummaryView>
      <h3>内訳</h3>
      <MonthlyDetailsView>{monthlyAggregation}</MonthlyDetailsView>
    </div>
  )
}

export default MonthlySummaryTable
