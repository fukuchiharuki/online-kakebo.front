import Aggregation from 'components/aggregation/model/Aggregation'
import WithLoading from 'components/ui/WithLoading'
import { QueryState } from 'infrastructure/useQuery'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJs, registerables } from 'chart.js'
ChartJs.register(...registerables)

type Props = {
  state: QueryState<Aggregation>
}

function Chart(props: Props) {
  const { isLoading, data } = props.state
  return (
    <WithLoading if={isLoading || data == null}>
      {() => {
        const aggregation = data!
        const 支出ChartData = aggregation.支出ChartData()
        const 推移ChartData = aggregation.推移ChartData()
        const 差分ChartData = aggregation.差分ChartData()
        function ave(data: number[], addition?: number[]): string {
          const dataAve = data.reduce((acc, n) => acc + n, 0) / data.length
          const additionAve = addition
            ? addition.reduce((acc, n) => acc + n, 0) / data.length
            : 0
          const ave = dataAve + additionAve
          const maximumFractionDigits = 0
          return ave < 0
            ? '▲' + (-ave).toLocaleString(undefined, { maximumFractionDigits })
            : ave.toLocaleString(undefined, { maximumFractionDigits })
        }
        return (
          <div>
            <h3>支出</h3>
            <dl className="coefficient">
              <dt>支出平均</dt>
              <dd className="yen">{ave(支出ChartData.datasets[1].data)}</dd>
              <br />
              <dt>特別費を含む</dt>
              <dd className="yen">
                {ave(
                  支出ChartData.datasets[1].data,
                  支出ChartData.datasets[2].data
                )}
              </dd>
            </dl>
            <Bar data={支出ChartData} />
            <h3 className="mt">予実差異</h3>
            <dl className="coefficient">
              <dt>差異平均</dt>
              <dd className="yen">{ave(差分ChartData.datasets[0].data)}</dd>
              <br />
              <dt>特別費を含む</dt>
              <dd className="yen">{ave(差分ChartData.datasets[1].data)}</dd>
            </dl>
            <Bar data={差分ChartData} />
            <h3 className="mt">推移</h3>
            <Line data={推移ChartData} options={{ aspectRatio: 1.6 }} />
          </div>
        )
      }}
    </WithLoading>
  )
}

export default Chart
