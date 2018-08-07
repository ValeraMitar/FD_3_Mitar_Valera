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
  };

  editMode = () => {
    this.props.isEditMode(true);
    console.log('now edit mode');
  };

  deleteItem = () => {
    this.props.deleteElement(this.props.id);
  };

  render() {
    var active = this.props.isActive ? 'active' : '';
    var className = `itemsRow ${active}`;
    return (
      <div className={className}>
        <div className='element-container' onClick={this.onClickHandler}>
          <span className='itemName'>{this.props.name}</span>
          <div className='imgContainer'>
            <img className='itemImage' src={this.props.photoURL} alt={this.props.caption} title={this.props.caption} />
          </div>
          <span className='itemPrice'>{this.props.price}</span>
          <span className='itemCount'>{this.props.count}</span>
        </div>
          {this.props.isActive ?
          <div className='buttons-container'>
            <button className='button edit-button' onClick={this.editMode}>Edit</button>
              {!this.props.isLastElement ?
                  <button className='button delete-button' onClick={this.deleteItem}>Delete</button>
                  : null}
          </div>
              : null}
      </div>
    )
  }

}

export default ItemElement;