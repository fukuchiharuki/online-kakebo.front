import { RouterProps } from 'App';

type Props = RouterProps;

function Dashboard(props: Props) {
  console.log(props.location.search)
  return (
    <div>Online KAKEBO</div>
  );
}

export default Dashboard;
