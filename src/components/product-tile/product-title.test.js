import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  const product = {
    "title": "Samsung UE50MU6100 - 4K tv",
    "globalId": "9200000076566695",
    "imageUrl": "//s.s-bol.com/imgbase0/imagebase3/regular/FC/5/9/6/6/9200000076566695.jpg",
    "price": "594,00",
    "subTitle": "Samsung"
  };

  ReactDOM.render(<ProductTile {...product }/>, div);
});
