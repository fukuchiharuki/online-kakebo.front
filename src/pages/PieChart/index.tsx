import Aggregation, {
  ChartData,
} from 'components/aggregation/model/Aggregation'
import AccountItemType from 'components/aggregation/model/AccountItemType'
import WithLoading from 'components/ui/WithLoading'
import { QueryState } from 'infrastructure/useQuery'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJs, registerables } from 'chart.js'
ChartJs.register(...registerables)

type Props = {
  state: QueryState<Aggregation>
}

function PieChart(props: Props) {
  const { isLoading, data } = props.state
  return (
    <WithLoading if={isLoading || data == null}>
      {() => {
        const aggregation = data!
        const 支出割合ChartData = new Map<number, ChartData>()
        支出割合ChartData.set(1, aggregation.支出割合ChartData(1))
        支出割合ChartData.set(3, aggregation.支出割合ChartData(3))
        支出割合ChartData.set(6, aggregation.支出割合ChartData(6))
        支出割合ChartData.set(12, aggregation.支出割合ChartData(12))
        return (
          <div>
            <h3>先月分の支出割合</h3>
            <dl className="coefficient">
              <dt>エンゲル係数</dt>
              <dd>{rate(AccountItemType.食費, 支出割合ChartData.get(1)!)}</dd>
              <br />
              <dt>エンジェル係数</dt>
              <dd>
                {rate(AccountItemType.子育て費用, 支出割合ChartData.get(1)!)}
              </dd>
            </dl>
            <Pie data={支出割合ChartData.get(1)!} />
            {[3, 6, 12].map((months, index) => (
              <div key={index}>
                <h3 className="mt">先月から{months}ヶ月分の支出割合平均</h3>
                <dl className="coefficient">
                  <dt>エンゲル係数</dt>
                  <dd>
                    {rate(AccountItemType.食費, 支出割合ChartData.get(months)!)}
                  </dd>
                  <br />
                  <dt>エンジェル係数</dt>
                  <dd>
                    {rate(
                      AccountItemType.子育て費用,
                      支出割合ChartData.get(months)!
                    )}
                  </dd>
                </dl>
                <Pie data={支出割合ChartData.get(months)!} />
              </div>
            ))}
          </div>
        )
      }}
    </WithLoading>
  )
}

function rate(type: AccountItemType, chartData: ChartData) {
  const index = chartData.labels.indexOf(type)
  const amount = chartData.datasets[0].data[index]
  const total = chartData.datasets[0].data.reduce((acc, a) => acc + a, 0)
  const rate = (100 * amount) / total
  return parseFloat(rate.toFixed(1))
}

export default PieChart
