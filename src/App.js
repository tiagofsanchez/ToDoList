import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import FetchRandomWithCard from './Components/FetchRandomUserCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid columns={2} divided>
          <Grid.Row>
          <Grid.Column>
            <FetchRandomWithCard />
          </Grid.Column>
          <Grid.Column>
            
          </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>

    );
  }
}

export default App;
