import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { Button, Label } from 'semantic-ui-react';




class ToDoList extends React.Component {

    state = {
        todos: [], 
        showTodos: "all",
        toogleAllComplete: true
    }

    //the ...this.state.todos will copy the array and i will be adding the todo at the beginnign of that array
    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    //Updating the state of the ToDo to complete = true and change their styling
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

    //deleting a ToDo from our list , with the filter I will get a new array with all the values with the exeption of the one that I clicked on
    deleteToDo = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        })
    }

    //delete the CompletedToDos on your list 
    deleteCompleteToDos = () => {
        const { todos } = this.state; 
        this.setState({
            todos: todos.filter(todo => !todo.complete)
            /* will keep the items that are not complete as complete is = to true */
        })
    }

    //Setting the state of all todo as completed
    setAllToComplete = () => {
        const { todos , toogleAllComplete } = this.state;

        this.setState({
            todos: todos.map(todo => ({
                ...todo,
                complete: toogleAllComplete
            })),
            toogleAllComplete: !toogleAllComplete
        })
    }


    //will thake care of what the user wants to select to show: {all} to do list, {active} or {complete}
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
            <div className='toDoList'>
                <ToDoForm onSubmit={this.addToDo} />                
                {/* Displaying all the ToDO's in my page as <ToDoList /> is being rendered on <App/> */}
                {todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        todo={todo}
                        the toogleComlete will 
                        toggleComplete={() => this.toggleComplete (todo.id)}
                        deleteToDo={() => this.deleteToDo (todo.id)}
                    />
                )}
                
                <div className="toDoListFilters">
                    
                    <div className="toDoListCounter">
                        {/* Will be a counter for the number of ToDos that are left */}
                        <Label>{this.state.todos.filter(todo => !this.state.todos.complete).length}</Label> actions left
                    </div>
                    
                    <div className="toDoListButtons">
                        <Button onClick={this.handleSelection} name="showTodos" value="all" >all</Button>
                        <Button onClick={this.handleSelection} name="showTodos" value="active" >active</Button>
                        <Button onClick={this.handleSelection} name="showTodos" value="complete" >complete</Button>
                        {todos.some(todo => todo.complete) ?
                            <Button onClick={this.deleteCompleteToDos} color='red'>delete all complete</Button>
                            :
                            null
                        }
                        <Button onClick={this.setAllToComplete} color="green" >all done</Button>
                    </div>
               
              
                </div>
                {/* You only need and should show the button if there are any complete todo's, otherwise you dont show items it 
                Can use .filter or .some, but better .some as it will exit the "loop" earliear */}
                

            </div>
            
        )
    }
}

export default ToDoList;