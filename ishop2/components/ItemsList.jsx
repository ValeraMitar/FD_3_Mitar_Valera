import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ItemElement from '../components/ItemElement';
import CardItemElement from '../components/CardItemElement';
// import '../css/Ishop.css';

class ItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isViewCard: false,
          listOfItems: this.props.listOfItems,
          isEditMode: false,
        };
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    setActiveTab = (selectedTabId) =>  {
      if(this.mounted) {
        var cardItem = this.state.listOfItems.find((element) => {
          return element.itemCode === selectedTabId;
        });
        this.setState({
          selectedTab: selectedTabId,
          selectedItemCard: cardItem,
          isViewCard:true,
          isEditMode: false,
        });
      }
    };

    editMode = () => {
       this.setState({
           isEditMode:true,
       });
    };

    deleteElement = (selectedTabId) => {
      if (this.state.listOfItems.length === 1) {
          return;
      }
      var indexElement = this.state.listOfItems.find((element,i) => {
          if(element.itemCode === selectedTabId) {
            return i;
          }
      });
      this.state.listOfItems.splice(indexElement,1);
      var checkIsLastElement = this.state.listOfItems.length === 1 ? true : false;
      this.setState({
          listOfItems:this.state.listOfItems,
          isViewCard:false,
          isLastElement:checkIsLastElement,
      });
    };

    render() {

        var itemsRow = this.state.listOfItems.map( (v) => {
          var isElementActive = this.state.selectedTab ? this.state.selectedTab === v.itemCode : false;
          return <ItemElement key={v.itemCode}
                id={v.itemCode}
                name={v.itemName}
                photoURL={v.URLphoto}
                caption={v.captionText}
                price={v.price}
                count={v.count}
                isActive={isElementActive}
                onActiveTab={this.setActiveTab}
                deleteElement={this.deleteElement}
                isLastElement={this.state.isLastElement}
                isEditMode={this.editMode}
            />
        });

        return (
            <div className='shopItems'>
                <div className='itemsContainer'>{itemsRow}</div>
                {this.state.isViewCard ? <CardItemElement isDisabled={!this.state.isEditMode} currentItem={this.state.selectedItemCard}/> : null}
            </div>
        )
    }

}

export default ItemsList;