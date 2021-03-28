import { createBrowserHistory } from "history";
import DataSourceParams from 'infrastructure/DataSourceParams';
import { State } from 'model/aggregation/useModel';
import useQuery from 'model/aggregation/useQuery';
import Dashboard from 'page/Dashboard';
import { Fragment } from 'react';
import { Route, Router } from 'react-router';

const history = createBrowserHistory();

function App() {
  const dataSouce = new DataSourceParams(history.location.search).dataSource();
  const state = useQuery(dataSouce);
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
