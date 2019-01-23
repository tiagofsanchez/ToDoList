import React from 'react';
import { Button } from 'semantic-ui-react';

export default props =>
    <div style={{ display: "flex", justifyContent: "center" }} >
        <div
            style={{
                textDecoration: props.todo.complete && "line-through"
            }}
            onClick={props.toggleComplete}
        >
            {props.todo.text}
        </div>
        <div>
            <Button size='mini' compact color='red' onClick={props.deleteToDo}>x</Button>
        </div>
    </div>

