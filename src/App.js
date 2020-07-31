// first update the functional component to class component 
//set 2 state color and clickCounter
//write funciton to show increase in click counter
//write a function to toggle click
//write a function to show change in color of div 
// 




import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
      this.state ={
      color:'true',
      clicks:'0',
    };
  }

clickcounter = () => {
  this.setState( {clicks: this.state.clicks +1});

  }

ToggleClick = () => {
  this.setState({show : !this.state.show });
}

changecolor = () => {
  let newColor = this.state.color =='orange';
  this.setState(
    {color: newColor});
}

    render (){
      return (
        <div>
          <div className="Box">
          onClick ={this.clickcounter}
          onClick ={this.ToggleClick}
          onClick={this.changecolor}
          </div>
        </div>
      );


  }
}


export default App;
