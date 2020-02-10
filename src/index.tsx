import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { AppContainer } from "./App";
import "./index.css";
import rootReducer from "./rootReducer";
import * as serviceWorker from './serviceWorker';
import rootSaga from "./rootSagas";

const basename = "/";
const history = createBrowserHistory({ basename });
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

(window as any).__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
/* eslint-enable */

const store = createStore(combineReducers({
  router: connectRouter(history),
  rootReducer,
}), composeEnhancers(middleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer history={history} />
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
serviceWorker.unregister();
