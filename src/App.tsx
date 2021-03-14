import { Route, Router } from 'react-router';
import { createBrowserHistory } from "history";
import Dashboard from 'page/Dashboard';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route path="/" render={dashboard} />
    </Router>
  );
}

function dashboard(props: any) { return <Dashboard {...props} /> }

export default App;

export type RouterProps = {
  location: {
    search: string
  };
}
