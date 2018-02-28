import { createStore as createReduxStore, combineReducers } from 'redux';

import { basketReducer } from './modules/basket';
import { productsReducer } from './modules/products';

export function createStore(intialState = {}) {
  const rootReducers = combineReducers({
    basket: basketReducer,
    products: productsReducer
  });

  return createReduxStore(
    rootReducers, intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
