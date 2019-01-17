import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ToDoList from './Components/ToDoList'
import ValidationForm from './Components/ValidatioForm';
import { Segment,Card } from 'semantic-ui-react';
import MyForm from './Components/myForm';


class App extends Component {
  render() {
    return (
      <div className="App">
  
           <MyForm />
      </div>
    );
  }
}

export default App;
