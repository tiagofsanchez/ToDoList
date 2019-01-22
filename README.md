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


## Had to start with a Form first as I was getting lost here :) 

myForm.js

1. Creating a mockup for the form
2. Simplify the onChange evente for all the inputs
 
 /* This handleChange takes care of all the events, input, textarea, checkbox, select */
    handleChange = (event, fieldName, isCheckBox) => {
        this.setState({ [fieldName]: isCheckBox ? event.target.checked : event.target.value })
    };
    onChange={event => this.handleChange(event,'name')} */

3. You can still change the event handler so that you can pass only one variable

   
 /*handleChange = event => {
            console.log(event.target.name);
            const isCheckBox = event.target.type === 'checkbox';
            this.setState({ [event.target.name]: isCheckBox event.target.checked : event.target.value })
    };*/

4. using the <form> to handle the submition of the information

    <form onSubmit={this.handleSubmit}>
    handleSubmit = (event) => {
        //It will prevent to refresh the page and pass values to the URL
        event.preventDefault();    

5. validation form (for that I did a new form just to make it simple and styled it with Semantic Ui just for fun)

## After understanding how a form works (and before moving)

Note that FORMS that take info from the user and will store it to pass it to parent component at same point in time

So after understanding Forms a bit better...I created:

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
    
