import Amount from 'components/ui/Amount'
import MonthlySummary from './model/MonthlySummary'

type Props = {
  children: MonthlySummary
}

function MonthlySummaryView(props: Props) {
  const monthlySummary = props.children
  return (
    <dl className="monthly-summary">
      <dt>予算</dt>
      <dd>
        <Amount>{monthlySummary.予算()}</Amount>
      </dd>
      <dt>支出</dt>
      <dd>
        <Amount>{monthlySummary.支出()}</Amount>
      </dd>
      <dd>
        特別費抜き: <Amount>{monthlySummary.特別費を含めない支出()}</Amount>
      </dd>
      <dd>
        特別費: <Amount>{monthlySummary.特別費()}</Amount>
      </dd>
      <dt>差異</dt>
      <dd>
        <Amount>{monthlySummary.特別費を含めた差異()}</Amount>
      </dd>
      <dd>
        特別費抜き: <Amount>{monthlySummary.特別費を含めない差異()}</Amount>
      </dd>
    </dl>
  )
}

export default MonthlySummaryView
