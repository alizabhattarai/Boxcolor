// first update the functional component to class component 
//define 2 color variable
//set 2 state color and count
//write a function to show change in color of div
//write a function to change in click






import React from 'react';
import './App.css';

const blue = 'blue';
const orange = 'orange';

class App extends React.Component {
  constructor (props) {
    super(props);
      this.state = {color: blue};
      this.state = {value:'0'};
      this.changeColor = this.changeColor.bind(this);
      this.buttonClicked = this.buttonClicked.bind(this);
    };
  
  changeColor(){
      const newColor = this.state.color == blue ? orange : blue;
      this.setState({ color: newColor })
    }

buttonClicked(event) {
  this.setState({value:this.state.vale+1});
}

render() {
  return (
    <div>
      <div style ={{background: this.state.color}} >
        <h1>Box Color</h1>
        <button onclick={this.changeColor}>Click</button>
        {this.state.value}</div>
      <button onClick= {this.buttonClicked}>Click</button>

      </div>
      // <div>{this.state.value}</div>
      // <button onClick= {this.buttonClicked}>Click</button>

    // </div>
  )
}
}
export default App; 
