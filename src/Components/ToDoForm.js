import React from 'react';
import { Form } from 'semantic-ui-react';
import shortid from 'shortid';


class ToDoForm extends React.Component {
   
    state = {text:'' };

    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    };
   
    handleSubmit = () => {
        console.log(this.state);
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        //WHY this doesn't clear the state... quite strange!
        this.setState({
                text: ""
        })
    };

    render() {
        
        const { text } = this.state

        return (
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
        )
    }
}

export default ToDoForm;