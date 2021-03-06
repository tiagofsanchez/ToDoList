import React from 'react';
import { Form, Card, Segment } from 'semantic-ui-react';

const initialState = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
};

class ValidationForm extends React.Component {

    state = initialState;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    validate = () => {
        /* let nameError= ''; */
        let emailError = '';
        /* let passwordError= ''; */


        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }
        // We need to return false not to run the console.log but also true for it to run otherwise we can't console.log
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        return true;
    };


    handleSubmit = () => {
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            //set the stat to an initial sate (for that to happen I need to create a new const with all the sate of this component)
            this.setState(initialState);
            console.log(this.state);
        }
    };

    render() {
        
        const { name , email , password , nameError , emailError , passwordError  } = this.state
        
        return (

            <Card color='blue'>
                <Card.Content>
                    <Card.Header >
                        A nice looking form for a change
                    </Card.Header>
                    <Segment raised color='blue'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Name</label>
                                <input
                                    name='name'
                                    onChange={this.handleChange}
                                    placeholder='Your name...'
                                    value = {name}
                                />

                                {/* This will be conditional rendering, but we will not need it here as the state is null */}
                                {nameError ?
                                    <div>
                                        {nameError}
                                    </div>
                                    : null
                                }

                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    name='email'
                                    onChange={this.handleChange}
                                    placeholder='Your email...'
                                    value={email}
                                />
                                <div>
                                    {emailError}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    name='password'
                                    onChange={this.handleChange}
                                    placeholder='Your Password'
                                    value={password}
                                />
                                <div>
                                    {passwordError}
                                </div>
                            </Form.Field>
                            <Form.Button color='blue'>Submit</Form.Button>
                        </Form>
                    </Segment>
                </Card.Content>
            </Card>

        )
    }
}

export default ValidationForm;