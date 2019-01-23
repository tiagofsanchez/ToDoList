import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ToDoList from './Components/ToDoList';
import { Menu , Container, Label , Segment } from 'semantic-ui-react';




class App extends Component {
  render() {
    return (
      <div className="AppBody"  >
        <div className="AppMenu">
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item header>
                <Label color="blue" size="massive">to do list project</Label>
              </Menu.Item>
            </Container>
          </Menu>
        </div>
        <div className="AppToDoList">
          <ToDoList />
        </div>
        <div className="AppFooter"> 
        2019 to do list project
        </div>
      </div>
    );
  }
}

export default App;
