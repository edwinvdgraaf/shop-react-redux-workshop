import React, { Component } from 'react';
import Price from '../price';

class Basket extends Component {

  render() {
    const { basket, removeFromBasket } = this.props;

    return (
      <div className="shopping-cart">
        <div className="shopping-cart__title">Winkelmandje: </div>
        {basket && basket.map(p => {
          return (<div key={p.globalId} className="product product--shopping-cart">
            <div className="product__party">{p.subtitle}</div>
            <div className="product__title">{p.title}</div>
            <Price price={p.price}/>
            <button onClick={(ev) => {
              ev.preventDefault();
              removeFromBasket(p.globalId);
            }}>Verwijderen</button>
          </div>);
        })}
      </div>
    );
  }
}

export default Basket;
