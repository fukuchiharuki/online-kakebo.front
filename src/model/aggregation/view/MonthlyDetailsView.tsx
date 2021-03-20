import { Fragment } from 'react';
import MonthlyAggregation from '../MonthlyAggregation';
import Repeat from 'ui/Repeat';
import Amount from 'ui/Amount';

type Props = {
  children: MonthlyAggregation
};

function MonthlyDetailsView(props: Props) {
  const monthlyAggregation = props.children;
  return (
    <dl className="monthly-details">
      <Repeat in={monthlyAggregation.categories()}>{it =>
        <Fragment>
          <dt>{it}</dt>
          <dd><Amount>{monthlyAggregation.filterByCategory(it).totalAmount()}</Amount></dd>
        </Fragment>
      }</Repeat>
    </dl>
  );
}

export default MonthlyDetailsView;
