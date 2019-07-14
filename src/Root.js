import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

const Root = ({ children, initialState = {} }) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(stateValidator, async))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
