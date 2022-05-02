// configureStore.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import itemReducer from './itemReducer';
import reserveReducer from './reserveReducer';
import singleitemReducer from './singleItemReducer';
import usersReducer from './userReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  usersReducer,
  itemReducer,
  reserveReducer,
  singleitemReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
