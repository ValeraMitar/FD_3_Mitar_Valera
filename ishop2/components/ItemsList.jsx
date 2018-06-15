import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ItemElement from '../components/ItemElement';
// import '../css/Ishop.css';

class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    isActive = (id) => {
        return this.state.selectedTab === id;
    }

    setActiveTab = (selectedTabId) =>  {
      if(this.mounted) {
        this.setState({
          selectedTab: selectedTabId,
        });
      }
    }

    render() {

        var itemsRow = this.props.listOfItems.map( (v) => {
          return <ItemElement key={v.itemCode}
                id={v.itemCode}
                name={v.itemName}
                photoURL={v.URLphoto}
                caption={v.captionText}
                price={v.price}
                count={v.count}
                isActive={this.isActive(v.itemCode)}
                onActiveTab={this.setActiveTab}
            />
        })

        return (
            <div className='shopItems'>
                <div className='itemsContainer'>{itemsRow}</div>
            </div>
        )
    }

}

export default ItemsList;