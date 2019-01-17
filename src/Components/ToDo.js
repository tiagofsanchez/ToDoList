import React from 'react';
import { Card, Segment } from 'semantic-ui-react';

function ToDo (props) {
    
    const { text , toggleComplete } = this.props
    
    return (
        <div onClick={toggleComplete}>
            {text}
        </div>
    )
}

export default ToDo;