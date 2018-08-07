"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Block from './components/Block';

let colors=require('./colors.json');

ReactDOM.render(
  <Block
    colors={colors}
  />
  , document.getElementById('container')
);

