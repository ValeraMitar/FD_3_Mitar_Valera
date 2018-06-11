var FilterComponent = React.createClass({

  displayName: 'Filter',

  getInitialState: function getInitialState() {
    return {
      isChecked: false,
      textArray: this.props.textList,
      sourceArray: this.props.textList,
      sourceArrayAlphabetical: this.sort(this.props.textList, this),
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
      sortArray = sortArray.slice().sort(this.callbackSort);
    } else {
      sortArray = this.arrayAfterSearch(this);
    }
    this.setState({
      isChecked: inputCheckBoxState,
      textArray: sortArray,
    });

  },

  handleChange: function (event) {
    var sortByUser = [];
    var sourceSortArray;
    if (event.target.value === '') {
      sortByUser = this.setKindOfArray();
    } else {
      sourceSortArray = this.setKindOfArray();
      sourceSortArray.map(function (el) {
        var searchMarker = el._text.search(event.target.value);
        if (searchMarker > 0) {
          sortByUser.push(el);
        }
      });
    }
    this.setState({
      textArray: sortByUser,
      textArrayAfterStringSort: sortByUser,
      isSearchMarkerPresent: event.target.value ? !!event.target.value : !!event.target.value,
      searchMarker: event.target.value ? event.target.value : !!event.target.value
    });
  },

  sort(arr, _this) {
    return arr.slice().sort(_this.callbackSort);
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
      var filtredArr = this.state.sourceArray;
      var data = [];
      filtredArr.map(function (el) {
        var searchMarker = el._text.search(_this.state.searchMarker);
        if (searchMarker > 0) {
          data.push(el);
        }
      });
      return data;
    } else {
      return _this.props.textList;
    }
  },

  callbackSort(a, b) {
    var nameA = a._text.toUpperCase();
    var nameB = b._text.toUpperCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  },

  render: function () {
    var filteredArray = this.state.textArray;
    var textListRow = filteredArray.map(el =>
      React.DOM.div({ key: el.id, className: 'itemsRow' },
        React.DOM.span({ className: 'listRow' }, el._text),
      ));

    return React.DOM.div({ className: 'filter' },
      React.DOM.div({ className: 'headerContainer' },
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
        )),
      React.DOM.div({ className: 'listContainer' }, textListRow),
    );
  },

});