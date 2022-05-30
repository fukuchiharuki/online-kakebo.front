import Amount from 'components/ui/Amount';
import Mount from 'components/ui/Mount';
import Repeat from 'components/ui/Repeat';
import { Fragment } from 'react';
import MonthlyAggregation from './model/MonthlyAggregation';

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
            <dd><Amount>{acountItemTypeAmount}</Amount></dd>
            <Mount if={diff}>
              <dd>*{it}すべて: <Amount>{categoryTotalAmount}</Amount></dd>
            </Mount>
          </Fragment>
        );
      }}</Repeat>
    </dl>
  );
}

export default MonthlyDetailsView;
