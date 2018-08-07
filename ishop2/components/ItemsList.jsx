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

  setActiveTab = (selectedTabId) => {
    if (this.mounted) {
      var cardItem = this.state.listOfItems.find((element) => {
        return element.itemCode === selectedTabId;
      });
      this.setState({
        selectedTab: selectedTabId,
        selectedItemCard: cardItem,
        isViewCard: true,
        isEditMode: false,
      });
    }
  };

  editMode = (editState) => {
    this.setState({
      isEditMode: editState,
    });
  };

  saveChanges = (itemElement) => {
    this.state.listOfItems.find((element) => {
      if (element.itemCode === this.state.selectedTab) {
        element.itemName = itemElement.itemName;
        element.price = itemElement.price;
        element.count = itemElement.count;
        return;
      }
    });
    this.setState({ listOfItems: this.state.listOfItems });
  }

  deleteElement = (selectedTabId) => {
    if (confirm("Do you really want to delete element?")) {
      if (this.state.listOfItems.length === 1) {
        return;
      }
      var indexElement = this.state.listOfItems.findIndex((element) => {
        if (element.itemCode === selectedTabId) {
          return element;
        }
      });
      this.state.listOfItems.splice(indexElement, 1);
      var checkIsLastElement = this.state.listOfItems.length === 1 ? true : false;
      this.setState({
        listOfItems: this.state.listOfItems,
        isViewCard: false,
        isLastElement: checkIsLastElement,
      });
    }
  };

  addNewElement = () => {
    this.state.listOfItems.push({
      "itemCode": this.state.listOfItems[this.state.listOfItems.length - 1].itemCode + 1,
      "itemName": "Default",
      "URLphoto": "",
      "captionText": "default",
      "price": 'Default',
      "count": 'default'
    });
    this.setState({listOfItems:this.state.listOfItems});
  } 

  render() {

    var itemsRow = this.state.listOfItems.map((v) => {
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
      <div className='elements-card'>
        <div className='shopItems'>
          <div className='itemsContainer'>{itemsRow}</div>
          {this.state.isViewCard ?
            <CardItemElement
              saveChanges={this.saveChanges}
              isEditMode={this.editMode}
              isDisabled={!this.state.isEditMode}
              currentItem={this.state.selectedItemCard}
            /> : null}
        </div>
        <div className='buttons-container-new'>
          <button className='button new-button' onClick={this.addNewElement}>Add new Element</button>
        </div>
      </div>
    )
  }

}

export default ItemsList;