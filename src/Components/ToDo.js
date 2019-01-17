import React from 'react';
import { Card, Segment } from 'semantic-ui-react';

function ToDo (props) {
    return (
        <div>
            {props.text}
        </div>
    )
}

export default ToDo;