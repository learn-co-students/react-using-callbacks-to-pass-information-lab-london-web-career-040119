import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  changeColorHandler = () =>
  this.setState({
    color: this.props.pickedColor
  })
  
  render() {
    return (
      <div className="cell" onClick={this.changeColorHandler} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
