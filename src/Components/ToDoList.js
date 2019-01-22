import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { Card } from 'semantic-ui-react';




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

    //could I receive (todo) instead of (id)?, need to test this assumption
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                //
                if (todo.id === id ) {
                    return {
                        ...todo, 
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        })
    }    

    render() {
        
        const { todos } = this.state;

        return (
            <div>
                <ToDoForm onSubmit={this.addToDo} />                
                {/* Displaying all the ToDO's in my page as <ToDoList /> is being rendered on <App/> */}
                {todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        todo={todo}
                        the toogleComlete will 
                        toggleComplete={() => this.toggleComplete (todo.id)}
                    />
                )}
                <div>
                    {/* Will be a counter for the number of ToDos that are left */}
                    To do's active: {todos.filter(todo => !todo.complete).length}
                </div>   
                <div>
                    <button>all</button>
                    <button>active</button>
                    <button>complete</button>
                </div>    
            </div>
            
        )
    }
}

export default ToDoList;