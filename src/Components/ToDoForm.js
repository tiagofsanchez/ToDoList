import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import shortid from 'shortid';
import '../App.css';



class ToDoForm extends React.Component {
   
    state = {text:'' };

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
        console.log(this.state.text);
        
    };
   
    handleSubmit = () => {
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        //to clear the state of the component
        this.setState({
            text: ""
        })
    };

    render() {
        
        const { text } = this.state

        return (
            
            <Segment className='toDoFormInput' raised>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <Form.Input
                        name='text'
                        value={text}
                        onChange={this.handleChange}
                        placeholder='todo...'
                    />
                    
                </Form.Field>
                <Form.Button color='blue' type="submit">Add a TODO</Form.Button>
            </Form>
            </Segment>
          
        )
    }
}

export default ToDoForm;