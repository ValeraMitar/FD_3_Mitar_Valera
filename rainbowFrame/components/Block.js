import React from 'react';
import PropTypes from 'prop-types';

import './block.css';
import RainbowFrame from './RainbowFrame';

class Block extends React.Component {

  static propTypes = {};

  state = {}

  render() {
  var text = 'done';
    console.log(this.props.colors);
    return (
      <div className='block'>
          <RainbowFrame colors={this.props.colors[0].colors} iteration={this.props.colors[0].colors.length}>
            {text}
          </RainbowFrame>
      </div>
    );
  }

}

export default Block;
