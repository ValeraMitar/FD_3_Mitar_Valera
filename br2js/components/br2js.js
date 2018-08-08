import React from 'react';
import PropTypes from 'prop-types';

class Br2js extends React.Component {

  static propTypes = {
    txt:PropTypes.string
  };
  
  state = {}
  splitString = (stringToSplit, separator) => {
    var arrayOfStrings = stringToSplit.split(separator);
    var arr = [];
    arrayOfStrings.map((v,i) => {
      if (i < arrayOfStrings.length - 1) { 
        arr.push(v);
        arr.push(<br/>);
      } else if (i === arrayOfStrings.length - 1) {
        arr.push(v);
      }
    }); 
    return arr;
  }
  render() {
 
  var text = this.props.text;
  var re = /<\/? *br[^>]*>/;
  var jsx = this.splitString(text,re);
    console.log(this.props.text);
    console.log(jsx);

    return (
      <div className='block'>
            {jsx}
      </div>
    );
  }

}

export default Br2js;