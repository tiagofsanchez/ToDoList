//Testign API's and Fetching and doing data manipulation
// Note to self: I can render the component and fetch at the same time, I don't need to fetch data before and only them render it. 
//How this will be working: I will be rendering with a loading indicator while fetching the data to render it after we fetch it.

import React from 'react';
import { Segment, Card, Image , Button } from 'semantic-ui-react';

class FetchRandomWithCard extends React.Component {
    
    state = {
        loading: true, 
        personas: [],
    }
    
    componentDidMount () {
        const url = 'https://api.randomuser.me/?results=25';
        fetch(url)
        .then(res => res.json())
        .then (data => {
            this.setState({personas: data.results , loading: false})
            console.log(this.state.personas);  
        }) 
    }
  
    render() {
        
        const { loading , personas} = this.state

        return (
            <div>
                {/* checking if the information was already fetched or not by testing if loading is true or false. we changed the loading to false after receiving the API data */}
                {loading ?
                    <div>loading...</div>
                    :
                    
                        <div>
                          
                            <Card.Group>
                            {personas.map(person => (
                                <Card raised centered key={person.login.uuid} >
                                <Card.Content>
                                    <Image floated='right' size='medium'  src={person.picture.large} />
                                    <Card.Header textAlign='left'>{person.name.first} {person.name.last} </Card.Header>
                                    <Card.Description textAlign = 'left'>Hi, my name is {person.name.first} and I am from {person.nat}</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Button basic color='green'>
                                                Approve
                                            </Button>
                                            <Button basic color='red'>
                                                Decline
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            ))}
                            </Card.Group>
                            
                        </div>
                   
                }
            </div>
        )
    }
}

export default FetchRandomWithCard;

