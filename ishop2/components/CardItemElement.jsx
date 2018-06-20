import React, { Component } from 'react'
import PropTypes from 'prop-types';

// import '../css/Ishop.css';

class CardItemElement extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div className='cardItem'>
        <input type='text' 
        name='itemNameCard' 
        className='itemNameCard'
        // defaultValue={this.props.currentItem.itemName}
        value={this.props.currentItem.itemName}
        // onChange={}
        disabled={true}
        />
        <input type='text' 
        name='itemPriceCard' 
        className='itemPriceCard'
        // defaultValue={this.props.currentItem.price}
        value={this.props.currentItem.price}
        // onChange={}
        disabled={true}
        />
        <input type='text' 
        name='itemCountCard' 
        className='itemCountCard'
        // defaultValue={this.props.currentItem.count}
        value={this.props.currentItem.price}
        // onChange={}
        disabled={true}
        />
      </div>
    )
  }

}

export default CardItemElement;