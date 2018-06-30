import React, { Component } from 'react';
import logo from './logo.svg';
import SayHello from './components/SayHello';
import Border from './components/Border';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Pattarkan Phompao",
      age:20
    };
  }
  incrementAge(){
    this.setState({age: this.state.age +10 })
  }
  decrementAge(){
    this.setState({age: this.state.age -10 })
  }
  render() {
    return (
      <div className="App">
        <SayHello name={this.state.name} age={this.state.age} />
        
        
        <div
         style={{
           width: this.state.age,
           border: 5,
           borderRadius:"0 5px 5px 0",
           borderStyle: "solid",
           color: "tomato",
           transition:"all 0.6s"
           
         }}
        />
        <br/>
        <Border>
        <button onClick={() => this.decrementAge()} style={{backgroundColor:"red",color:"#ffffff",border:"none",padding:"5px 15px",fontWeight:"bold"}}>ลบอายุ</button>{" "}
        <button onClick={() => this.incrementAge()} style={{backgroundColor:"green",color:"#ffffff",border:"none",padding:"5px 15px",fontWeight:"bold"}}>เพิ่มอายุ</button>
        </Border>
        
        
      </div>
    );
  }
}

export default App;
