import { State } from 'components/aggregation/model/useModel';
import useQuery from 'components/aggregation/model/useQuery';
import Center from 'components/ui/Center';
import { createBrowserHistory } from "history";
import DataSource from 'infrastructure/DataSource';
import DataSourceParams from 'infrastructure/DataSourceParams';
import Dashboard from 'pages/Dashboard';
import { Fragment } from 'react';
import { Route, Router } from 'react-router';

const history = createBrowserHistory();

function App() {
  const dataSourceParams = new DataSourceParams(history.location.search);
  if (!dataSourceParams.validate()) return <InvalidParameters />;
  const dataSource = dataSourceParams.dataSource();
  return <EntryPoint {...{ dataSource }} />;
}

function InvalidParameters() {
  console.error("invalid parameters.");
  return <Center>๐·°(৹˃ᗝ˂৹)°·๐</Center>;
}

function EntryPoint(props: { dataSource: DataSource }) {
  const { dataSource } = props;
  const state = useQuery(dataSource);
  return (
    <Fragment>
      <header>
        <h1>Online KAKEBO</h1>
      </header>
      <hr />
      <Router history={history}>
        <Route path="/" render={dashboard(state)} />
      </Router>
    </Fragment>
  );
}

function dashboard(state: State) {
  return () => <Dashboard {...{ state }} />;
}

export default App;
