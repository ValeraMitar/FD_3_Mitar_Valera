var FilterComponent = React.createClass({

    displayName: 'Filter',
    state={
        isChecked = false,
    },
    propTypes: {
        textList:React.PropTypes.arrayOf(
        React.PropTypes.shape({
            text: React.PropTypes.string.isRequired,
        })
      )
    },
  
    onChecked: function() {
        var inputState = this.state.isChecked;
        this.setState( {isChecked:!inputState} );
    },

    render: function() {
  
      var textListRow = this.props.textList.map( el =>
          React.DOM.div({key:el.stringCode,className:'itemsRow'},
            React.DOM.span({className:'listRow'},el.text),
        ));

      return React.DOM.div( {className:'filter'}, 
        React.DOM.div( {className:'listContaoner'}, textListRow ),
        React.DOM.input({
            type:'checkbox',name:'filter',
            onClick:this.onChecked,
            checked: this.state.isChecked,
        })
      );
    },
  
  });