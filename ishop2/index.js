"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './components/ItemsList';
import defaultItems from './itemsToShop.json';

// let defaultItems = require('../ishop2/itemsToShop.json');

ReactDOM.render(
  <ItemsList 
    listOfItems={defaultItems}
  />
  , document.getElementById('container') 
);

