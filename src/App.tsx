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
import 'css.gg/icons/css/sync.css'
import 'css.gg/icons/css/clipboard.css'
import 'css.gg/icons/css/view-list.css'
import useMenu from 'Menu';

const history = createBrowserHistory();

function App() {
  const dataSourceParams = new DataSourceParams(history.location.search);
  if (!dataSourceParams.validate()) return <InvalidParameters />;
  const dataSource = dataSourceParams.dataSource();
  return <Main {...{ dataSource }} />;
}

function InvalidParameters() {
  console.error("invalid parameters.");
  return <Center>๐·°(৹˃ᗝ˂৹)°·๐</Center>;
}

function Main(props: { dataSource: DataSource }) {
  const { dataSource } = props;
  const aggregationState = useAggregationQuery(dataSource);
  const [menu, next] = useMenu();
  const nextMenuItem = menu.nextMenuItem()
  return (
    <Fragment>
      <header>
        <div className="button" onClick={next}>
          <i className={nextMenuItem.icon} />
        </div>
        <h1>家計簿 Viewer</h1>
        <div className="button" onClick={() => window.location.reload()}>
          <i className="gg-sync" />
        </div>
      </header>
      <hr />
      <Router history={history}>
        <Route path="/" render={dashboard(aggregationState)} />
      </Router>
    </Fragment>
  );
}

function dashboard(state: QueryState<Aggregation>) {
  return () => <Dashboard {...{ state }} />;
}

export default App;
