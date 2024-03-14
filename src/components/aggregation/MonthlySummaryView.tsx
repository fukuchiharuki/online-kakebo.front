import Amount from 'components/ui/Amount'
import MonthlySummary from './model/MonthlySummary'

type Props = {
  children: MonthlySummary
}

function MonthlySummaryView(props: Props) {
  const monthlySummary = props.children
  return (
    <dl className="monthly-summary">
      <dt>支出</dt>
      <dd>
        <Amount>{monthlySummary.支出()}</Amount>
      </dd>
      <dd>
        特別費を除く:{' '}
        <span>
          <Amount>{monthlySummary.特別費を含めない支出()}</Amount>
        </span>
      </dd>
      <dd>
        特別費:{' '}
        <span>
          <Amount>{monthlySummary.特別費()}</Amount>
        </span>
      </dd>
    </dl>
  )
}

export default MonthlySummaryView
