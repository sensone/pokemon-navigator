import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/App';

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
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
