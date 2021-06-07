import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = sagaMiddleware;

  const store = createStore(rootReducer, applyMiddleware(middlewares));

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore()

