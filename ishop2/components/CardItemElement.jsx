import React, { Component } from 'react'
import PropTypes from 'prop-types';

// import '../css/Ishop.css';

class CardItemElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
        itemName:this.props.currentItem.itemName,
        price:this.props.currentItem.price,
        count:this.props.currentItem.count,
        isEditMode:this.props.isDisabled,
    };
  }

  componentDidMount() {
      this.mounted = true;
  }

  componentWillUnmount() {
      this.mounted = false;
  }

  componentDidUpdate(oldProps, oldState) {
  }

  componentWillReceiveProps(newProps) {
      console.log(newProps,this.props.currentItem);
      this.setState({
          itemName:newProps.currentItem.itemName,
          price:newProps.currentItem.price,
          count:newProps.currentItem.count,
          isEditMode:newProps.isDisabled,
      });
  }

  render() {
      console.log('re-render');
    return (
      <div className='cardItem'>
        <input type='text' 
        name='itemNameCard' 
        className='itemNameCard'
        // defaultValue={this.props.currentItem.itemName}
        value={this.state.itemName}
        // onChange={}
        disabled={this.state.isEditMode}
        />
        <input type='text' 
        name='itemPriceCard' 
        className='itemPriceCard'
        // defaultValue={this.props.currentItem.price}
        value={this.state.price}
        // onChange={}
        disabled={this.state.isEditMode}
        />
        <input type='text' 
        name='itemCountCard' 
        className='itemCountCard'
        // defaultValue={this.props.currentItem.count}
        value={this.state.count}
        // onChange={}
        disabled={this.state.isEditMode}
        />
      </div>
    )
  }

}

export default CardItemElement;