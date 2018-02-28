import React, { Component } from 'react';
import Header from '../../components/header';
import Basket from '../../components/basket';
import ProductTiles from '../product-tiles';

import mockedProducts from './products.json';

class App extends Component {
  constructor(props) {
    super();



    this.state = {
      products: mockedProducts,
      basket: [],
    };

    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  addToBasket(product) {
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

  removeFromBasket(globalId) {
    this.setState((prevState) => {
      const newBasket = prevState.basket.filter(basketProduct => basketProduct.globalId !== globalId);

      return {
        basket: newBasket
      }
    })
  }

  render() {
    const { products, basket } = this.state;

    return (
      <div className="page-wrapper">
        <Header basket={basket} />
        <div className="main">
          <ProductTiles products={products} addToBasket={this.addToBasket} basket={basket} />
        </div>
        <Basket basket={basket} removeFromBasket={this.removeFromBasket} />
        <div className="footer">
          <div className="flex-center">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
