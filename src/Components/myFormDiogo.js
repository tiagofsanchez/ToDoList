import React from 'react';
import { Form, Segment, Select, Dropdown} from 'semantic-ui-react';


const options = [
    { key: 'mr', text: 'Mr.', value: 'Mr.' },
    { key: 'miss', text: 'Miss.', value: 'Miss.' },
    { key: 'ms', text: 'Ms.', value: 'Ms.' },
    { key: 'mrs', text: 'Mrs.', value: 'Mrs.' }, 
];


const initialState = {
    name: '',
    text: '',
    rememberMe: false,
    title: ''
};


class MyFormDiogo extends React.Component {

    state = initialState;

    /* This handleChange takes care of all the events, input, textarea, checkbox, select */
    handleChange = (event, name = null, value = null) => {

        name ? console.log(name) : console.log(event.target.name);
        const isCheckBox = event.target.type === 'checkbox';
        this.setState({ [name ? name : event.target.name]: isCheckBox ? event.target.checked : value ? value : event.target.value })
    };

    /* QUESTION: Sera que da para consolidar os handele Events num so? */
    /* handleChangeOtherTitle = (event, {value} ) => {
        this.setState({othertitle: {value}})
    } */

    /* This will not be needed as my handleChange function could be simplify */
    /* handleChangeText = (event) => {
        this.setState({ text: event.target.value })
    }; */

    /* handleChangeBox = (event) => {
        this.setState({ rememberMe: event.target.checked })
    }; */

    /*  handleChangeTitle = (event) => {
         this.setState({ title: event.target.value})
     } */

    handleSubmit = (event) => {
        //It will prevent to refresh the page and pass values to the URL
        event.preventDefault();
        console.log(this.state);
        //Everytime that I submit it will return an empty form
        this.setState(initialState);
    }


    render() {

        const { name , text , rememberMe , title } = this.state

        return (
            <Segment raised>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Input
                        name='name'
                        value={ name }
                        onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        placeholder='Your name...'
                        label='First name'
                    />
                    <Form.TextArea
                        name='text'
                        value={ text }
                        onChange={(event, { name, value }) => this.handleChange(event, name, value)}
                        placeholder='Something about you...'
                    />
                    <input
                        name='rememberMe'
                        type="checkbox"
                        checked={ rememberMe } 
                        onChange={event => this.handleChange(event)}
                    />
                    <Form.Group>
                       
                        <Form.Dropdown
                            name='title'
                            onChange={(event,  { name, value } ) => this.handleChange(event, name, value)}
                            placeholder='Mr.,Miss.,Ms. or Mrs'
                            fluid
                            selection
                            options = { options }
                            value= { title }
                        />
                      
                    </Form.Group>

                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default MyFormDiogo;