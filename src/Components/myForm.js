import React from 'react';
import { Form, Segment, Select, Dropdown} from 'semantic-ui-react';


const options = [
    { key: 'mr', text: 'Mr.', value: 'Mr.' },
    { key: 'miss', text: 'Miss.', value: 'Miss.' },
    { key: 'ms', text: 'Ms.', value: 'Ms.' },
    { key: 'mrs', text: 'Mrs.', value: 'Mrs.' }, 
];

class MyForm extends React.Component {


    state = {
        name: '',
        text: '',
        rememberMe: false,
        title: '',
        othertitle:''
    }

    /* This handleChange takes care of all the events, input, textarea, checkbox, select */
    handleChange = event => {
        console.log(event.target.name);
        const isCheckBox = event.target.type === 'checkbox';
        this.setState({ [event.target.name]: isCheckBox ? event.target.checked : event.target.value })
    };

    /* QUESTION: Sera que da para consolidar os handele Events num so? */
    handleChangeOtherTitle = (event, {value} ) => {
        this.setState({othertitle: {value}})
    }

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

    }

    render() {

        const { name , text , rememberMe , title } = this.sate;
        
        return (
            <Segment raised>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Input
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        placeholder='Your name...'
                        label='Your name'
                    />
                    <Form.TextArea
                        name='text'
                        value={this.state.text}
                        onChange={event => this.handleChange(event, 'text')}
                        placeholder='Something about you...'
                    />
                    <input
                        name='rememberMe'
                        type="checkbox"
                        checked={this.state.rememberMe} 
                        onChange={event => this.handleChange(event, 'rememberMe', true)}
                    />
                    <Form.Group>
                       
                            <Dropdown
                            /* name='othertitle' */
                        
                            onChange={this.handleChangeOtherTitle}
                            placeholder='Mr.,Miss.,Ms. or Mrs'
                            fluid
                            selection
                            options={options}
                            value= { this.state.value }
                        />  
                       
                        {/* <select
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}>
                            <option>Mr.</option>
                            <option>Miss.</option>
                            <option>Ms.</option>
                            <option>Mrs.</option>
                        </select> */}
                    </Form.Group>

                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default MyForm;