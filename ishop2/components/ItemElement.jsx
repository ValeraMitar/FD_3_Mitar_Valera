import React, { Component } from 'react'
import PropTypes from 'prop-types';

import '../css/Ishop.css';

class ItemElement extends Component {

    constructor(props) {
        this.state = {};
    }

    render() {
        return (
            <div className = 'itemsRow'>
                <span className = 'itemName'>{this.props.name}</span>
                <div className = 'imgContainer'>
                <img className = 'itemImage' src = {this.props.photoURL} alt = {this.props.caption}/>
                </div>
                <span className = 'itemPrice'>{this.props.pprice}</span>
                <span className = 'itemCount'>{this.props.count}</span>
            </div>
        )
    }

}

export default ItemElement;