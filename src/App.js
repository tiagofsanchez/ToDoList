import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import FetchRandom from './Components/FetchRandomUser';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FetchRandom />
      </div>
      
    );
  }
}

export default App;
