// configureStore.js
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import booksReducer from './books/books';
// import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
//   booksReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
