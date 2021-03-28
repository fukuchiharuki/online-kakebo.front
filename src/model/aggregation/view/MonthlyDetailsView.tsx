import { Fragment } from 'react';
import Amount from 'ui/Amount';
import Mount from 'ui/Mount';
import Repeat from 'ui/Repeat';
import MonthlyAggregation from '../MonthlyAggregation';

type Props = {
  children: MonthlyAggregation
};

function MonthlyDetailsView(props: Props) {
  const monthlyAggregation = props.children;
  return (
    <dl className="monthly-details">
      <Repeat in={monthlyAggregation.categories()}>{it => {
        const categoryTotalAmount = monthlyAggregation.filterByCategory(it).totalAmount();
        const acountItemTypeAmount = monthlyAggregation.filterByAccountItemType(it).totalAmount();
        const diff = categoryTotalAmount !== acountItemTypeAmount;
        return (
          <Fragment>
            <dt>{it}<Mount if={diff}>*</Mount></dt>
            <dd><Amount>{categoryTotalAmount}</Amount></dd>
            <Mount if={diff}>
              <dd>(*内 純粋な{it}: <Amount>{acountItemTypeAmount}</Amount>)</dd>
            </Mount>
          </Fragment>
        );
      }}</Repeat>
    </dl>
  );
}

export default MonthlyDetailsView;
