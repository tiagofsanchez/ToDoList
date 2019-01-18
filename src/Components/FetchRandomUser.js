//Testign API's and Fetching and doing data manipulation
// Note to self: I can render the component and fetch at the same time, I don't need to fetch data before and only them render it. 
//How this will be working: I will be rendering with a loading indicator while fetching the data to render it after we fetch it.

import React from 'react';

class FetchRandom extends React.Component {
    
    state = {
        loading: true, 
        personas: [],
    }
    
    componentDidMount () {
        const url = 'https://api.randomuser.me/?results=10';
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
                        {personas.map(person => (
                            <div key={person.login.uuid} >
                                <img src={person.picture.large} />
                                <div>First Name: {person.name.first}</div>
                                <div>Last Name: {person.name.last}</div>
                                <div>Password is: {person.login.password}</div>          
                            </div>
                        ))}
                    </div>}
            </div>
        )
    }
}

export default FetchRandom;

