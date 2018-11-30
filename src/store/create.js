import { createStore as _createStore, applyMiddleware } from 'redux';
//import { routerMiddleware } from 'react-router-redux';
//import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '../modules/reducer';
//import rootSaga from '../sagas/index';

export default function createStore() {

  // Sync dispatched route actions to the history
  //const reduxRouterMiddleware = routerMiddleware(history);
  //const sagaMiddleware = createSagaMiddleware();
  //const middleware = [sagaMiddleware, reduxRouterMiddleware];
  const middleware = [createLogger()];
  //let composeEnhancers;

  //middleware.push(sagaMiddleware);

//   if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());

//     composeEnhancers =
//       typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;
//   }
//   else {
//     middleware.push(createLogger()); //TODO: also showing the redux-logger for remote servers for now
//     composeEnhancers = compose;
//   }

//   const enhancers = composeEnhancers(
//     applyMiddleware(...middleware)
//   );

  const store = _createStore(reducers, applyMiddleware(...middleware));

  //sagaMiddleware.run(rootSaga);//register sagas

  return store;
}
