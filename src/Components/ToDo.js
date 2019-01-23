import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

export default props =>
    <Segment style={{ display: "flex", justifyContent: "left" }} clearing>
        <div style={{
            textDecoration: props.todo.complete && "line-through"
        }}
            onClick={props.toggleComplete}>
            {props.todo.text}
        </div>
        <div style={{ display: "inline" }}>
            <Button size='mini' compact color='red' onClick={props.deleteToDo} floated='right'>x</Button>
        </div>
    </Segment>


