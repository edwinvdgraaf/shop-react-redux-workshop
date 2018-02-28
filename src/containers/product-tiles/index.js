import React, { Component } from 'react';
import ProductTile from '../../components/product-tile';

class ProductTiles extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { products, addToBasket, basket } = this.props;

    return products ? products.map((p, i) => 
      <ProductTile {...p} 
        key={i}
        addToBasket={addToBasket} 
        inBasket={basket.filter(bp => bp.globalId === p.globalId).length > 0 } />
    ) : <p>Geen producten gevonden</p>;
  }
}

export default ProductTiles;
