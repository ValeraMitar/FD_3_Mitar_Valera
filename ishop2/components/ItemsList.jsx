import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ItemElement from '../components/ItemElement';
// import '../css/Ishop.css';

class ItemsList extends Component {

    constructor(props) {
        super();
        this.state = {};
        this.setActiveTab = this.setActiveTab.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    isActive(id) {
        return this.state.selectedTab === id;
    }

    setActiveTab(selectedTabId) {
        this.setState({
            selectedTab: selectedTabId,
        })
    }

    render() {

        var itemsRow = this.props.listOfItems.map(function (v) {
          return <ItemElement key={v.itemCode}
                name={v.itemName}
                photoURL={v.URLphoto}
                caption={v.captionText}
                price={v.price}
                count={v.count}
                isActive={this.isActive(v.itemCode)}
                onActiveTab={this.setActiveTab(v.itemCode)}
            />
        },this)

        return (
            <div className='shopItems'>
                <div className='itemsContainer'>{itemsRow}</div>
            </div>
        )
    }

}

export default ItemsList;