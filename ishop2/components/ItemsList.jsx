import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ItemElement from '../components/ItemElement';
import '../css/Ishop.css';

class ItemsList extends Component {

    constructor(props) {
        this.state = {};
    }

    render() {

        var itemsRow = this.props.defaultItems.map(v =>
            <ItemElement key={v.itemCode}
            name = {v.itemName}
            photoURL = {v.URLphoto}
            caption = {v.captionText}
            price = {v.price}
            count = {v.count}
            />
        )

        return (
            <div className='shopItems'>
                <div className='itemsContainer'>{itemsRow}</div>
            </div>
        )
    }

}

export default ItemsList;