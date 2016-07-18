import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';
import PokemonsListPage from './components/PokemonsListPage';

import store from './store';


const history = syncHistoryWithStore(browserHistory, store);



function Foo() {
  return <div><div>Hello world!!</div></div>;
}

function Bar() {
  return <div>Hello world!!! yo</div>;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Bar}/>
        <Route path="articles" component={Foo}/>
        <Route path="pokemons-list" component={PokemonsListPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
