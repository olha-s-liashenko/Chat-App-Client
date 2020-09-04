import React, { Component }  from 'react';
import { Row, Container, Col, Jumbotron } from 'react-bootstrap';
import "./MessageList.css";
import Message from "./Message.js";


function MessagesList(props) {
    return(
        <Container>
            <Row>
                <Col></Col>
                <Col xs={9}>
        <Jumbotron id="messages">
            <Message messages={props.messages}/>
        </Jumbotron>
        </Col>
        <Col></Col>
        </Row>
        </Container>
    );
}

export default MessagesList;