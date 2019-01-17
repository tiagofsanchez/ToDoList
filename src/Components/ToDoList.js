import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { Segment } from 'semantic-ui-react';



class ToDoList extends React.Component {

    state = {
        todos: []
    }

    //the ...this.state.todos will copy the array and i will be adding the todo at the beginnign of that array
    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }


    toggleComplete = (id) => {

    }

    render() {
        return (
            <div>
                
                <ToDoForm onSubmit={this.addToDo} />
                {this.state.todos.map(todo => (
                    <Segment raised>
                    <ToDo
                        key={todo.key}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        text={todo.text}
                    />
                    </Segment>
                ))}
                

            </div>
        )
    }
}

export default ToDoList;