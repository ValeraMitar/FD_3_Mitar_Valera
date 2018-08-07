import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {};

  newProps = () => {
    this.props.colors.shift();
    return this.props.colors;
  }
  render() {
    console.log(this.props.colors,this.props.iteration);
    if (this.props.iteration === 0) {
      return(
      <div>"Last"</div>
      )
    }else{
      
      console.log(this.props.colors);
      return (
        <div className="border-block" style={{border:"dashed 1px "+this.props.colors[0],padding:"10px"}}>
          {/* {this.props.children} */}
          <RainbowFrame colors = {this.newProps()} iteration={this.props.colors.length}/>
        </div>
      );
    }
  }

}

export default RainbowFrame;
