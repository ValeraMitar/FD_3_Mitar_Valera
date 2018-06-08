var ItemComponent = React.createClass({

    displayName: 'ItemInShop',
  
    propTypes: {
        items:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          itemCode: React.PropTypes.number.isRequired,
          count: React.PropTypes.number.isRequired,
          price: React.PropTypes.number.isRequired,
          itemName: React.PropTypes.string.isRequired,
          URLphoto: React.PropTypes.string.isRequired,
          captionText: React.PropTypes.string.isRequired,
        })
      )
    },
  
    render: function() {
  
      var itemsRow = this.props.items.map( el =>
          React.DOM.div({key:el.itemCode,className:'itemsRow'},
            React.DOM.span({className:'itemName'},el.itemName),
            React.DOM.div({className:'imgContainer'},
              React.DOM.img({src:el.URLphoto, alt:el.captionText,className:'itemImage'})),
            React.DOM.span({className:'itemPrice'},el.price),
            React.DOM.span({className:'itemCount'},el.count),
        ));

      return React.DOM.div( {className:'shopItems'}, 
        React.DOM.div( {className:'itemsContainer'}, itemsRow ),
      );
    },
  
  });