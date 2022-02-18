import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import LoginPage from './components/LoginPage';
import Form from './components/Form';
import ListPage from './components/List';
import Main from './components/Main';
import NotFound from './components/NotFound';
import User from './components/User';


function App() {
  return (
    <>
      <Router >
      <Switch>

        <Route exact path="/" component={LoginPage} />
          <Route path="/form" component={Form} />
          <Route path="/list" component={ListPage} />
          <Route path="/main" component={Main} />
          <Route path="/user" component={User} />
          <Route component={NotFound} />
          </Switch>

      </Router>
    </>
  );
}

export default App;
