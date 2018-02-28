import React, { Component } from 'react';

class Basket extends Component {

  render() {
    const { price } = this.props;
    const [integer, fractional] = price.split(",");

    return (
      <div className="product__price">{integer},<sup className="product__price product__price--fraction">{fractional}</sup></div>
    );
  }
}

export default Basket;
