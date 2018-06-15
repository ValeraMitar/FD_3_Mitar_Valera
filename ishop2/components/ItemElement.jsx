import React, { Component } from 'react'
import PropTypes from 'prop-types';

// import '../css/Ishop.css';

class ItemElement extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  onClickHandler = (e) => {
    e.preventDefault();
    this.props.onActiveTab(this.props.id);
  }

  render() {
    var active = this.props.isActive ? 'active' : '';
    var className = `itemsRow ${active}`;
    return (
      <div className={className} onClick={this.onClickHandler}>
        <span className='itemName'>{this.props.name}</span>
        <div className='imgContainer'>
          <img className='itemImage' src={this.props.photoURL} alt={this.props.caption} title={this.props.caption} />
        </div>
        <span className='itemPrice'>{this.props.price}</span>
        <span className='itemCount'>{this.props.count}</span>
      </div>
    )
  }

}

export default ItemElement;