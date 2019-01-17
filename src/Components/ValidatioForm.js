import React from 'react';
import { Form, Card, Segment } from 'semantic-ui-react';

class ValidationForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        nameError: '',
        emailError: '',
        passwordError: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state);

    }

    render() {
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
                                />
                               
                                {/* This will be conditional rendering, but we will not need it here as the state is null */}
                                {this.state.nameError ?
                                    <div>
                                        {this.state.nameError}
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
                                />
                                <div>
                                    {this.state.emailError}
                                </div>
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    name='password'
                                    onChange={this.handleChange}
                                    placeholder='Your Password'
                                />
                                <div>
                                    {this.state.passwordError}
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