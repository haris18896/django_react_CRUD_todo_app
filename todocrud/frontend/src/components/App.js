
import Dashboard from './todos/Dashboard'; // added

import { Provider } from 'react-redux'; // added
import store from '../store'; // added
import Header from './layout/Header';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'; // added
import TodoDelete from './todos/TodoDelete';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
            <Route exact path='/edit/:id' component={TodoEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}