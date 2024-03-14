import Amount from 'components/ui/Amount'
import Mount from 'components/ui/Mount'
import Repeat from 'components/ui/Repeat'
import { Fragment } from 'react'
import MonthlyAggregation from './model/MonthlyAggregation'
import { specOf, valuesOf } from './model/AccountItemType'

type Props = {
  children: MonthlyAggregation
}

function MonthlyDetailsView(props: Props) {
  const monthlyAggregation = props.children
  return (
    <dl className="monthly-details">
      <Repeat in={monthlyAggregation.filter支出().categories()}>
        {(it) => {
          const categoryTotalAmount = monthlyAggregation
            .filterByCategory(it)
            .totalAmount()
          const subAccountItemsAmounts = valuesOf(it).map((item) => ({
            name: specOf(item).shortName(),
            list: specOf(item).list(),
            value: monthlyAggregation
              .filterByAccountItemType(item)
              .totalAmount(),
          }))
          const hasSubAccountItems = subAccountItemsAmounts.length > 1
          return (
            <Fragment>
              <dt>{it}</dt>
              <dd>
                <Amount>{categoryTotalAmount}</Amount>
              </dd>
              <Mount if={hasSubAccountItems}>
                <Repeat in={subAccountItemsAmounts}>
                  {(it) => (
                    <Mount if={it.list}>
                      <dd>
                        {it.name}:{' '}
                        <span>
                          <Amount>{it.value}</Amount>
                        </span>
                      </dd>
                    </Mount>
                  )}
                </Repeat>
              </Mount>
            </Fragment>
          )
        }}
      </Repeat>
    </dl>
  )
}

export default MonthlyDetailsView
