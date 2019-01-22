import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { Button } from 'semantic-ui-react';




class ToDoList extends React.Component {

    state = {
        todos: [], 
        showTodos: "all",
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

    //will thake care of what the user wants to select
    handleSelection = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        
        /* This was valid when we wanted to display all the todos, now we want to change the type of todos that are displayed */
        /* const { todos } = this.state; */

        const { showTodos } = this.state;

        let todos = [];

        /* this will set up the todos array depending on the status change that will be change on the click of the button */
        if (showTodos === "all") {
            todos = this.state.todos;
        } else if (showTodos === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else {
            todos = this.state.todos.filter(todo => todo.complete)
        }


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
                    <Button onClick={this.handleSelection} name="showTodos" value="all" >all</Button>
                    <Button onClick={this.handleSelection} name="showTodos" value="active" >active</Button>
                    <Button onClick={this.handleSelection} name="showTodos" value="complete" >complete</Button>
                </div>    
            </div>
            
        )
    }
}

export default ToDoList;