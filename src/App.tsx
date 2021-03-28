import { createBrowserHistory } from "history";
import DataSource from 'infrastructure/DataSource';
import DataSourceParams from 'infrastructure/DataSourceParams';
import { State } from 'model/aggregation/useModel';
import useQuery from 'model/aggregation/useQuery';
import Dashboard from 'page/Dashboard';
import { Fragment } from 'react';
import { Route, Router } from 'react-router';
import Center from 'ui/Center';

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
