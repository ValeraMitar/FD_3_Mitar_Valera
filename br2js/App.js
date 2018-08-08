"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2js from './components/br2js.js';

let txt=`ajsndasdjnsdjn <br/> dsfsdfsdfsdfsdff <br> kkdmfkdmfmmmmmmmm<br/> bbbbbbbbbbbbbb<br/> end <br/>`;

ReactDOM.render(
  <Br2js
    text={txt}
  />
  , document.getElementById('container')
);

