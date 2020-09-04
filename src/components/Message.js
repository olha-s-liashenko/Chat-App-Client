import React from "react";
import { ListGroup } from 'react-bootstrap';

export default function Message(props) {
    console.log(props.messages);
    const listItems = props.messages.map((message) =>
        <ListGroup.Item><h4>{message.name}</h4><p>{message.text}</p></ListGroup.Item>
    );
    return(
        <ListGroup>
            {listItems}
        </ListGroup>
    );
}