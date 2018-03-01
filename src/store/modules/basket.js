export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function basketReducer(state = [], action) {
  switch (action.type) {
    // IMPLEMENT EXERCISE 1
    default:
      return state
  }
}

export function addProduct(productId) {
  return {
    type: ADD_PRODUCT,
    payload: productId
  }
}

export function removeProduct(productId) {
  return {
    type: REMOVE_PRODUCT,
    payload: productId
  }
}
