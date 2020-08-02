// first update the functional component to class component 
//define 2 color variable
//set 2 state color and count
//write a function to show change in color of div
//write a function to change in no of click
//

import React from 'react';
import './App.css';

const blue = 'blue';
const orange = 'orange';

class App extends React.Component {
  constructor (props) {
    super(props);
      this.state = {color: blue};
      this.state = {value: 0 };
      this.changeColor = this.changeColor.bind(this);
      this.buttonClicked = this.buttonClicked.bind(this);
    };
  
  changeColor(){
      const newColor = this.state.color == blue ? orange : blue;
      this.setState({ color: newColor })
    }

buttonClicked(event) {
  this.setState({value:this.state.value+1});
}

render() {
  return (
    <div className= "BOX">
      <h1>Change color</h1>
      <div style ={{background: this.state.color}} onClick={this.changeColor} >
        <div >{this.state.value}</div>
        <button onClick={this.buttonClicked} >Click</button>
        </div>
       </div>
  );
}
}
export default App; 
