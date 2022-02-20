import useAggregationQuery from 'components/aggregation/model/useAggregationQuery';
import Center from 'components/ui/Center';
import { createBrowserHistory } from "history";
import DataSource from 'infrastructure/DataSource';
import DataSourceParams from 'infrastructure/DataSourceParams';
import Dashboard from 'pages/Dashboard';
import { Fragment } from 'react';
import { Route, Router } from 'react-router';
import { QueryState } from 'infrastructure/useQuery';
import Aggregation from 'components/aggregation/model/Aggregation';

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
  const state = useAggregationQuery(dataSource);
  return (
    <Fragment>
      <header>
        <h1>Online KAKEBO</h1>
        <div className="reload button button--small" onClick={() => window.location.reload()}>更新</div>
      </header>
      <hr />
      <Router history={history}>
        <Route path="/" render={dashboard(state)} />
      </Router>
    </Fragment>
  );
}

function dashboard(state: QueryState<Aggregation>) {
  return () => <Dashboard {...{ state }} />;
}

export default App;
