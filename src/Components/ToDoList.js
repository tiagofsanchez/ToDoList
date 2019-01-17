import React from 'react';
import MyForm from './myForm';
import ValidationForm from './ValidatioForm';

class ToDoList extends React.Component {
    

    render() {
        return (
            <div>
                {/* <MyForm></MyForm> */}
                <ValidationForm />
            </div>
        )
    }
}

export default ToDoList;