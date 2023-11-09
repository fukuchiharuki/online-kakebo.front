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
        return (
          <div>
            <h3>支出</h3>
            <Bar data={支出ChartData} />
            <h3 className='mt'>予実差</h3>
            <Bar data={差分ChartData} />
            <h3 className='mt'>推移</h3>
            <Line data={推移ChartData} options={{ aspectRatio: 1.6 }} />
          </div>
        )
      }}
    </WithLoading>
  )
}

export default Chart
