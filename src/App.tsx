import { Fragment } from 'react';
import { Route, Router } from 'react-router';
import { createBrowserHistory } from "history";
import Dashboard from 'page/Dashboard';

const history = createBrowserHistory();

function App() {
  return (
    <Fragment>
      <header>
        <h1>Online KAKEBO</h1>
      </header>
      <hr />
      <Router history={history}>
        <Route path="/" component={dashboard} />
      </Router>
    </Fragment>
  );
}

export type RouterProps = {
  location: {
    search: string
  };
}

function dashboard(props: RouterProps) { return <Dashboard {...props} /> }

export default App;
