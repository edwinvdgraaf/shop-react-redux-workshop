export const SET_INITIAL_PRODUCTS = 'SET_INITIAL_PRODUCTS';

export function productsReducer(state = {}, action) {
  switch (action.type) {
    // IMPLEMENT EXERCISE 2
    default:
      return state
  }
}

export function setInitialProducts(products) {
  return {
    type: SET_INITIAL_PRODUCTS,
    payload: products
  }
}

