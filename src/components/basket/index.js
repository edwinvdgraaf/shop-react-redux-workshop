import React, { Component } from 'react';

class Basket extends Component {

  render() {
    const { basket, removeFromBasket } = this.props;

    return (
      <div className="shopping-cart">
        <div className="shopping-cart__title">Winkelmandje: </div>
        {basket && basket.map(p => {
          return (<div key={p.globalId} className="product product--shopping-cart">
            <div className="product__party">Samsung</div>
            <div className="product__title">Samsung UE55MU7000 - 4K tv</div>
            <div className="product__price"> 95,<sup className="product__price product__price--fraction">99</sup></div>
            <button onClick={(ev) => {
              removeFromBasket(p.globalId);
            }}>Verwijderen</button>
          </div>);
        })}
      </div>
    );
  }
}

export default Basket;
