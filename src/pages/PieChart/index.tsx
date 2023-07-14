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
        const 支出1ヶ月分ChartData = aggregation.支出ChartData(1)
        const 支出12ヶ月分ChartData = aggregation.支出ChartData(12)
        return (
          <div>
            <h3>先月分の支出</h3>
            <dl className="coefficient">
              <dt>エンゲル係数</dt>
              <dd>{rate(AccountItemType.食費, 支出1ヶ月分ChartData)}</dd>
            </dl>
            <Pie data={支出1ヶ月分ChartData} />
            <h3>先月から{12}ヶ月分の支出平均</h3>
            <dl className="coefficient">
              <dt>エンゲル係数</dt>
              <dd>{rate(AccountItemType.食費, 支出12ヶ月分ChartData)}</dd>
            </dl>
            <Pie data={支出12ヶ月分ChartData} />
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
