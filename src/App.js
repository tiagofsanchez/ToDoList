import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ToDoList from './Components/ToDoList';
import { Menu , Label } from 'semantic-ui-react';




class App extends Component {
  
  state = {
    activeMenu: 'home',
  }
  
  handleMenu = (e ,{ name } ) => {
    this.setState({
      activeMenu: name
    })
    console.log(this.state.activeMenu);
  }
  
  render() {
    
    const { activeMenu } = this.state;
  
    return (
      <div className="AppBody"  >
        <div className="AppMenu">
          <Menu fixed='top' inverted pointing>
              <Menu.Item header>
                <Label color="blue" size="massive">to do list project</Label>
              </Menu.Item>
              <Menu.Item
                name="home"
                active={activeMenu === "home"}
                onClick={this.handleMenu}
              >
              </Menu.Item>
              <Menu.Item
                name="about the project"
                active={activeMenu === "about the project"}
                onClick={this.handleMenu}
              >
              </Menu.Item>
          </Menu>
        </div>
        { activeMenu === 'home'?
        <div className="AppToDoList">
          <ToDoList />
        </div>
        :
        null
        }
       
        <div className="AppFooter"> 
        2019 to do list project
        </div>
      </div>
    );
  }
}

export default App;
