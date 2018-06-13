'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './components/ItemsList';
import defaultItems from './itemsToShop.json';

ReactDOM.render(
  <ItemsList 
    listOfItems={defaultItems}
  />
  , document.getElementById('container') 
);

