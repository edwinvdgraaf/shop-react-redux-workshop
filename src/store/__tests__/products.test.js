import { ENABLE_EXERCISE_2 } from '../../enabled-exercises';
import { productsReducer, setInitialProducts } from '../modules/products';
import products from '../../products.json';

describe('products store module', () => {
  it('by default returns the empty state', () => {
    let state = productsReducer(undefined, {
      type: 'UNKNOWN_ACTION'
    });

    expect(state).toBeInstanceOf(Object);
  });

  if(ENABLE_EXERCISE_2) {
    it('can set the initial product', () => {
      let state = productsReducer(undefined, setInitialProducts(products));
      expect(state[0]).toEqual(products[0])
    });
  }
});
