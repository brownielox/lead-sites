import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReadingsForm from './ReadingsForm'
import About from './About'
import configureStore from './store/configureStore';
import { Router, browserHistory, Route } from 'react-router'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (<Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/submit" component={ReadingsForm}/>
    <Route path="/about" component={About}/>
  </Router>)
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
