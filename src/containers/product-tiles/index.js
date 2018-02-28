import React, { Component } from 'react';
import ProductTile from '../../components/product-tile';

class ProductTiles extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { products, addToBasket, basket } = this.props;

    return products.map((p, i) => 
      <ProductTile {...p} 
        addToBasket={addToBasket} inBasket={basket.filter(bp => bp.globalId === p.globalId).length > 0  } key={i} />
    );
  }
}

export default ProductTiles;
