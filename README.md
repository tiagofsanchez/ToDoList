## TO DO LIST 

A project on the back of TodoMVC and based on the tutorial by Ben Awad. 
You can ceck the youTube video here -> https://www.youtube.com/watch?v=I6IY2TqnPDA&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=16

### Features to consider 
1. add a todo
2. display todos
3. cross off todos
4. show number of active todos 
5. filter all / active / complete
6. delete todo
7. delete all complete
    7.1 only show if atleast one is complete 
8. button to toggle all on/off 

### Details and explanations you will be able to see on ABOUT page

1. ToDoForm.js
2. ToDoList.js
3. ToDo.js 
    First i did this component as a class, but there is no need for that actually so just used a function 
    //this is a very simple way to pass the props from the parent component
    export default props =>  
    <div>
        {props.todo.text}
    </div>
    Now to be able to cross this ToDO off, you need to change style and change status
    
