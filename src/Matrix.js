import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

//* I had to be able to pick a color from the palette 
//* store it as state , so that i can them pass it as props into the method to change cell into the cell componeent 
//* there was one other way i thought abotu doing it the changeColor handler was going to manage state algother , i gained aacess to row and column but 
// * to do this i added the rowIndex parameter in genRow() I could have access to the rows nd then pass changeColor handler the row and column 
// I passed only pickedColor state as props to cell componeent, ignore the changeCellColor that is ther for rference 
export default class Matrix extends Component {

  state = {
    colors: this.props.values,
    pickedColor: ""
  }

  

  genRow = (vals, rowIndex) => (
    vals.map((val, columnIndex) => <Cell key={columnIndex} color={val} pickedColor={this.state.pickedColor} changeCellColor = {() => this.changeColorHandler(rowIndex, columnIndex)} />)
  )

  genMatrix = () => (
    this.state.colors.map((rowVals, rowIndex) => <div key={rowIndex} className="row">{this.genRow(rowVals, rowIndex)}</div>)
  )

  
  colorSetter = (color) => {
    let selectedColor = color.target.style.backgroundColor
    this.setState({
      pickedColor: selectedColor
    })
  }

changeColorHandler = (row,column)=>{
//   cellIndex = find the element we clicked on from the cell 
// use this information to identify where the element lies in our state
// then we destrcuture state , and update the proper of the e.g [0][0]
  
} 


  render() {
    return (
      <div id="app">
        <ColorSelector 
        changeColor = {this.colorSetter}
        />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}


