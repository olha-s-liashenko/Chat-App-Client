import React, { Component }  from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';

class MessageField extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={9}>
                        <h1 className="display-4 ">Send Message</h1>
                        <br/>
                        <input id="name" className="form-control" placeholder="Name" onChange={this.props.onChangeName}/>
                        <br/>
                        <textarea id="message" className="form-control" placeholder="Your Message Here" onChange={this.props.onChangeMessage}>
                        </textarea>
                        <br/>
                        <Button id="send" className="btn btn-success" onClick={ this.props.handleSendEvent }>Send</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default MessageField;