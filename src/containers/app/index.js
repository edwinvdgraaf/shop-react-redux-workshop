import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from '../../components/header';
import Basket from '../../components/basket';
import ProductTiles from '../product-tiles';

import mockedProducts from '../../products.json';

import { createStore } from '../../store';
import { setInitialProducts } from '../../store/modules/products';

import { ENABLE_EXERCISE_3, ENABLE_EXERCISE_4 } from '../../enabled-exercises';
  
let store = createStore({});
store.dispatch(setInitialProducts(mockedProducts));

class App extends Component {
  constructor(props) {
    super();

    // Feel free to delete this code when reaching exercise 4 as it is anoying
    if(ENABLE_EXERCISE_3 && ENABLE_EXERCISE_4) {
      this.state = {};
    } else if (ENABLE_EXERCISE_3) {
      this.state = {
        basket: [],
      };
    } else {
      this.state = {
        products: mockedProducts,
        basket: [],
      };
    }

    // Feel free to delete this code when reaching exercise 4 as it is anoying
    if(!ENABLE_EXERCISE_4) {

      this.addToBasket = (product) => {
        this.setState((prevState) => {
          const productAlreadyInBasket = prevState.basket.find(basketProduct => basketProduct.globalId === product.globalId);
          if(productAlreadyInBasket){
            return prevState;
          }

          const newBasket = prevState.basket.concat(product);

          return {
            basket: newBasket
          }
        })
      }

      this.removeFromBasket = (globalId) => {
        this.setState((prevState) => {
          const newBasket = prevState.basket.filter(basketProduct => basketProduct.globalId !== globalId);

          return {
            basket: newBasket
          }
        })
      }

    }
  }


  render() {
    const { products, basket } = this.state;

    return (
      <Provider store={store}>
        <div className="page-wrapper">
          <Header productsInBasket={basket.length} />
          <div className="main">
            <ProductTiles products={products} addToBasket={this.addToBasket} basket={basket} />
          </div>
          <Basket basket={basket} removeFromBasket={this.removeFromBasket} />
          <div className="footer">
            <div className="flex-center">Footer</div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
