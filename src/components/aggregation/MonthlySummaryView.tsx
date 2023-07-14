import Amount from 'components/ui/Amount'
import MonthlySummary from './model/MonthlySummary'

type Props = {
  children: MonthlySummary
}

function MonthlySummaryView(props: Props) {
  const monthlySummary = props.children
  return (
    <dl className="monthly-summary">
      <dt>収入</dt>
      <dd>
        <Amount>{monthlySummary.収入()}</Amount>
      </dd>
      <dt>支出</dt>
      <dd>
        <Amount>{monthlySummary.支出()}</Amount>
      </dd>
      <dd>
        特別費を除く: <Amount>{monthlySummary.特別費を除いた支出()}</Amount>
      </dd>
      <dd>
        特別費: <Amount>{monthlySummary.特別費()}</Amount>
      </dd>
      <dt>差引</dt>
      <dd>
        <Amount>{monthlySummary.特別費を含めた差引()}</Amount>
      </dd>
      <dd>
        特別費を除く: <Amount>{monthlySummary.特別費を含めない差引()}</Amount>
      </dd>
    </dl>
  )
}

export default MonthlySummaryView
