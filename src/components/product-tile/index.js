import React, { Component } from 'react';
import Price from '../price';

class ProductTile extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(ev) {
    ev.preventDefault();

    const { globalId, imageUrl, price, subTitle, title } = this.props;

    const product = {
      globalId, imageUrl, price, subTitle, title
    };

    this.props.addToBasket(product);
  }

  render() {
    const { imageUrl, price, subTitle, title, inBasket } = this.props;


    return (
      <div className="product">
        <div className="product__image">
          <img src={imageUrl} alt={ title } />
        </div>
        <div className="product__party">{ subTitle }</div>
        <div className="product__title">{ title }</div>
        <Price price={price} />
        <button onClick={this.onClick} disabled={inBasket} >In winkelwagentje</button>
      </div>
    );
  }
}

export default ProductTile;
