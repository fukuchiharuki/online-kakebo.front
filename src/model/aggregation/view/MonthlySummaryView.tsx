import Amount from 'ui/Amount';
import Mount from 'ui/Mount';
import MonthlySummary from '../MonthlySummary';

type Props = {
  children: MonthlySummary
};

function MonthlySummaryView(props: Props) {
  const monthlySummary = props.children;
  return (
    <dl className="monthly-summary">
      <dt>収入</dt>
      <dd><Amount>{monthlySummary.収入()}</Amount></dd>
      <dt>支出</dt>
      <dd><Amount>{monthlySummary.特別費を除いた支出()}</Amount></dd>
      <Mount if={monthlySummary.特別費()}>
        <dd>(+ 特別費: <Amount>{monthlySummary.特別費()}</Amount>)</dd>
      </Mount>
      <dt>差引</dt>
      <dd><Amount>{monthlySummary.特別費を含めた差引()}</Amount></dd>
      <Mount if={monthlySummary.特別費()}>
        <dd>(特別費込: <Amount>{monthlySummary.特別費を含めた差引()}</Amount>)</dd>
      </Mount>
    </dl>
  );
}

export default MonthlySummaryView;
