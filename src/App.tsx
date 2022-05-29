import useAggregationQuery from 'components/aggregation/model/useAggregationQuery';
import Center from 'components/ui/Center';
import { createBrowserHistory } from "history";
import DataSource from 'infrastructure/DataSource';
import DataSourceParams from 'infrastructure/DataSourceParams';
import Summary from 'pages/Summary';
import { Fragment } from 'react';
import { Route, Router } from 'react-router';
import { QueryState } from 'infrastructure/useQuery';
import Aggregation from 'components/aggregation/model/Aggregation';
import 'css.gg/icons/css/sync.css'
import 'css.gg/icons/css/clipboard.css'
import 'css.gg/icons/css/view-list.css'
import useMenu from 'Menu';
import Book from 'pages/Book';
import Entries from 'components/entry/model/Entries';
import useEntriesQuery from 'components/entry/model/useEntriesQuery';

const history = createBrowserHistory({ basename: "/online-kakebo.front" });

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
  const entriesState = useEntriesQuery(dataSource);
  const [menu, next] = useMenu(history.location.pathname);
  const nextMenuItem = menu.nextMenuItem()
  const onMenuClick = () => {
    next()
    history.push({ pathname: nextMenuItem.path, search: history.location.search })
  }
  return (
    <Fragment>
      <header>
        <div className="button" onClick={onMenuClick}>
          <i className={nextMenuItem.icon} />
        </div>
        <h1>家計簿 Viewer</h1>
        <div className="button" onClick={() => window.location.reload()}>
          <i className="gg-sync" />
        </div>
      </header>
      <hr />
      <Router history={history}>
        <Route exact path="/" render={summary(aggregationState)} />
        <Route exact path="/book" render={book(entriesState)} />
      </Router>
    </Fragment>
  );
}

function summary(state: QueryState<Aggregation>) {
  return () => <Summary {...{ state }} />;
}

function book(state: QueryState<Entries>) {
  return () => <Book {...{ state }} />;
}

export default App;
