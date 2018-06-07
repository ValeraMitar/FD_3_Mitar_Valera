var FilterComponent = React.createClass({

    displayName: 'Filter',

    getInitialState: function () {
        return {
            isChecked: false,
            textArray: this.props.textList,
            // textArrayOld: [],
        };
    },

    propTypes: {
        // textList: React.PropTypes.string.isRequired,
        filterLabel: React.PropTypes.string.isRequired,
    },

    onChecked: function () {
        var inputState = !this.state.isChecked;
        var sortArray;
        if (inputState) {
            sortArray = this.state.textArray;
            sortArray.sort();
        } else {
            sortArray = this.props.textList;
        }
        this.setState({ 
            isChecked: inputState,
            textArray: sortArray});
        
    },

    handleChange: function (event) {
        console.log(event.target.value);
    },

    render: function () {
        var filteredArray = this.state.textArray;
        var textListRow = filteredArray.map(el =>
            React.DOM.div({ className: 'itemsRow' },
                React.DOM.span({ className: 'listRow' }, el),
            ));

        return React.DOM.div({ className: 'filter' },
            React.DOM.div({ className: 'checkBoxContainer' },
                React.DOM.input({
                    type: 'checkbox',
                    name: 'filter',
                    value: this.props.filterLabel,
                    onClick: this.onChecked,
                    defaultChecked: this.state.isChecked,
                }),
                React.DOM.span({ className: 'inputLabel' }, this.props.filterLabel)
            ),
            React.DOM.div({ className: 'inputSearchContainer' },
                React.DOM.input({
                    type: 'text',
                    name: 'filter',
                    onChange: this.handleChange,
                    defaultChecked: 'Please enter filter marker',
                }),
            ),
            React.DOM.div({ className: 'listContaoner' }, textListRow),
        );
    },

});