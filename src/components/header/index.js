import React, { Component } from 'react';
import BasketSvg  from './basket.svg';

class Header extends Component {
  render() {
    const { productsInBasket } = this.props;

    return (
      <div className="header">
        <div className="header__col">
          Bol.com
        </div>
        <div className="header__col">
          <div className="header__basket">
            <img src={BasketSvg} alt="Basket" width={16} height={16} /> Basket ({productsInBasket})
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
