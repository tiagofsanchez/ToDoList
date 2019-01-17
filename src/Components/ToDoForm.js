import React from 'react';



class ToDoForm extends React.Component {
   
    state = {
        text: ''
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <input
                name="text"
                value={this.props.text}
                onChange={this.handleChange}
                placeholder='todo...'
            />
        )
    }
}

export default ToDoForm;