import React, { Component } from 'react'
import PropTypes from 'prop-types';

// import '../css/Ishop.css';

class CardItemElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.currentItem.itemName,
      price: this.props.currentItem.price,
      count: this.props.currentItem.count,
      isEditMode: this.props.isDisabled,
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
    console.log(newProps, this.props.currentItem);
    this.setState({
      itemName: newProps.currentItem.itemName,
      price: newProps.currentItem.price,
      count: newProps.currentItem.count,
      isEditMode: newProps.isDisabled,
    });
  }

  nameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      itemName: e.target.value,
    });

  }

  priceChange = (e) => {
    console.log(e.target.value);
    this.setState({
      price: parseInt(e.target.value),
    });
  }

  countChange = (e) => {
    console.log(e.target.value);
    this.setState({
      count: parseInt(e.target.value),
    });
  }

  saveParams = () => {
    this.props.saveChanges(this.state);
  }

  cancelEditMode = () => {
    this.props.isEditMode(false);
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
          onChange={this.nameChange}
          disabled={this.state.isEditMode}
        />
        <input type='text'
          name='itemPriceCard'
          className='itemPriceCard'
          // defaultValue={this.props.currentItem.price}
          value={this.state.price}
          onChange={this.priceChange}
          disabled={this.state.isEditMode}
        />
        <input type='text'
          name='itemCountCard'
          className='itemCountCard'
          // defaultValue={this.props.currentItem.count}
          value={this.state.count}
          onChange={this.countChange}
          disabled={this.state.isEditMode}
        />
        {!this.state.isEditMode ?
        <div className='buttons-container'>
          <button className='button save-button' onClick={this.saveParams}>Save</button>
          <button className='button cancel-button' onClick={this.cancelEditMode}>Cancel</button>
        </div> : null}
      </div>
    )
  }

}

export default CardItemElement;