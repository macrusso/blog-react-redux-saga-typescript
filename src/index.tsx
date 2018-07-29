import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga'
import { App } from './App';
import './index.css';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './rootSagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware,
);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(middleware),
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
