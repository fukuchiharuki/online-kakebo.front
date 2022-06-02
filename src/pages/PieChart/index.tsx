import Aggregation from 'components/aggregation/model/Aggregation';
import WithLoading from 'components/ui/WithLoading';
import { QueryState } from 'infrastructure/useQuery';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs, registerables } from 'chart.js';
ChartJs.register(...registerables);

type Props = {
  state: QueryState<Aggregation>
};

function PieChart(props: Props) {
  const { isLoading, data } = props.state;
  return (
    <WithLoading if={isLoading || data == null}>{() => {
      const aggregation = data!
      const 特別費を除く支出1ヶ月分ChartData = aggregation.特別費を除く支出ChartData(1)
      const 特別費を除く支出12ヶ月分ChartData = aggregation.特別費を除く支出ChartData(12)
      return (
        <div>
          <h3>先月分の支出</h3>
          <Pie data={特別費を除く支出1ヶ月分ChartData} />
          <h3>先月から{12}ヶ月分の支出平均</h3>
          <Pie data={特別費を除く支出12ヶ月分ChartData} />
        </div>
      )
    }}</WithLoading>
  );
}

export default PieChart;
