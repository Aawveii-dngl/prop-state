import React, { Component } from 'react'
import './App.css';
import {ITEMS} from './Store/Item'
import Maincomp from './Components/Maincomp'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:ITEMS
    }
  }
  
  render(){
  return (
    <div className="App">  
      <Maincomp item={this.state.items}/>
    </div>
  );
}
}

export default App;