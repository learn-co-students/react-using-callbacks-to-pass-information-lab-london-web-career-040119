import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickHandler = (e) => {
    this.setState({
      color: this.props.activeColor()
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickHandler}>
      </div>
    )
  }
  
}
