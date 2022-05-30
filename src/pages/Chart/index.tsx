import Aggregation from 'components/aggregation/model/Aggregation';
import WithLoading from 'components/ui/WithLoading';
import { QueryState } from 'infrastructure/useQuery';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJs, registerables } from 'chart.js';
ChartJs.register(...registerables);

type Props = {
  state: QueryState<Aggregation>
};

function Chart(props: Props) {
  const { isLoading, data } = props.state;
  return (
    <WithLoading if={isLoading || data == null}>{() => {
      const aggregation = data!
      const 差引累計ChartData = aggregation.差引累計ChartData()
      const 収支ChartData = aggregation.収支ChartData()
      return (
        <div>
          <h3>直近{差引累計ChartData.labels.length}ヶ月の累計</h3>
          <Line data={差引累計ChartData} />
          <h3>直近{収支ChartData.labels.length}ヶ月の収支</h3>
          <Bar data={収支ChartData} />
        </div>
      )
    }}</WithLoading>
  );
}

export default Chart;
