
import { ENABLE_EXERCISE_1 } from '../../enabled-exercises';
import { basketReducer, addProduct, removeProduct } from '../modules/basket';


describe('basket store module', () => {
  it('by default returns the empty state', () => {
    let state = basketReducer(undefined, {
      type: 'UNKNOWN_ACTION'
    });

    expect(state).toBeInstanceOf(Array);
    expect(state).toHaveLength(0);
  });

  if(ENABLE_EXERCISE_1) {
    it('can add product to basket', () => {
      let state = basketReducer(undefined, addProduct(9200000076566695));

      expect(state).toBeInstanceOf(Array);
      expect(state).toHaveLength(1);
      expect(state[0]).toBe(9200000076566695);

      state = basketReducer(state, addProduct(9200000075776765));
      expect(state).toHaveLength(2);
      expect(state[1]).toBe(9200000075776765);
    });
  

    it('can remove products from basket', () => {
      const initialState = [9200000076566695, 9200000075776765];
      let state = basketReducer(initialState, removeProduct(9200000076566695));

      expect(state).toBeInstanceOf(Array);
      expect(state).toHaveLength(1);
      expect(state[0]).toBe(9200000075776765);
    })
  }
});
