import React, {Component} from 'react';

const styles = {
  button: {
    width:   100,
    margin:  8,
    padding: 8
  }
};
export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button onClick={this.props.clickCallback} style={{...styles.button, ...this.props.style}}>
        {this.props.children}
      </button>
    );
  }
}

