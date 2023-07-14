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
        const 収支ChartData = aggregation.収支ChartData()
        const 推移ChartData = aggregation.推移ChartData()
        const 差引累計ChartData = aggregation.差引累計ChartData()
        return (
          <div>
            <h3>直近{収支ChartData.labels.length}ヶ月の収支</h3>
            <Bar data={収支ChartData} />
            <h3>直近{推移ChartData.labels.length}ヶ月の推移</h3>
            <Line data={推移ChartData} options={{ aspectRatio: 1.6 }} />
            <h3>直近{差引累計ChartData.labels.length}ヶ月の累計</h3>
            <Line data={差引累計ChartData} />
          </div>
        )
      }}
    </WithLoading>
  )
}

export default Chart
