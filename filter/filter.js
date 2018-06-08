var FilterComponent = React.createClass({

  displayName: 'Filter',

  getInitialState: function getInitialState() {
    return {
      isChecked: false,
      textArray: this.props.textList,
      sourceArray: this.props.textList,
      sourceArrayAlphabetical: this.sort(this.props.textList),
      isSearchMarkerPresent: false,
    };
  },

  propTypes: {
    filterLabel: React.PropTypes.string.isRequired,
  },

  onChecked: function () {
    var inputCheckBoxState = !this.state.isChecked;
    var sortArray = this.state.textArray;

    if (inputCheckBoxState) {
      sortArray = sortArray.concat([]).sort();
    } else {
      sortArray = this.arrayAfterSearch(this);
    }
    this.setState({
      isChecked: inputCheckBoxState,
      textArray: sortArray,
    });

  },

  handleChange: function (event) {
    console.log(event.target.value);
    var sortByUser = [];
    var sourceSortArray;
    if (event.target.value === '') {
      sortByUser = this.setKindOfArray();
    } else {
      sourceSortArray = this.setKindOfArray();
      sourceSortArray.map(function (el) {
        var searchMarker = el.search(event.target.value);
        if (searchMarker > 0) {
          sortByUser.push(el);
        }
      });
    }
    this.setState({
      textArray: sortByUser,
      textArrayAfterStringSort: sortByUser,
      isSearchMarkerPresent: event.target.value ? !!event.target.value : !!event.target.value,
    });
  },

  sort(arr) {
    return arr.concat().sort();
  },

  setKindOfArray() {
    if (this.state.isChecked) {
      return this.state.sourceArrayAlphabetical;
    } else {
      return this.state.sourceArray;
    }
  },

  arrayAfterSearch(_this) {
    if (this.state.isSearchMarkerPresent) {
      return _this.state.textArrayAfterStringSort;
    } else {
      return _this.props.textList;
    }
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