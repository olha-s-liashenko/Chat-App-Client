import React, { Component } from "react";
import MessageField from "./MessageField";
import MessagesList from "./MessagesList";
import ChatActionsManager from "../helpers/ChatActions";
import SocketManager from "../helpers/SocketManager";
import Constant from "../helpers/Constant";
import * as io from "socket.io-client";
const socket = null;

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: Constant.ENDPOINT,
            messages: [],
            currentMessage: {
                name: "",
                text: ""
            },
        }
    }

    componentDidMount() {
        console.log("MOUNT!");
        ChatActionsManager.getMessagesHistory()
        .then((history) => {
            this.setState(state => {
                const historyMessages = state.messages.concat(history);
                return {
                    messages: historyMessages
                }
            });
            this.renderMessageList(this.state.messages);
            
        })
        .catch((err) => {
            console.log("Error loading history. More info: "+ err);
        });

        this.socket = io(Constant.ENDPOINT);
        this.socket.on("connect", () => {
            console.log("Socket connection established...");
        });
        this.socket.on("message", (message) => {
            this.setState(state => {
                const newMessagesList = state.messages.concat(message);
                return {
                    messages: newMessagesList
                }
            });
            console.log("message from socket: ");
            console.log(this.state.messages);
            this.renderMessageList(this.state.messages);
        })
        this.socket.on("disconnect", () => {
            console.log("Socket connection disconnected...");
            this.socket.open();
        });

    }

    handleClick = () => {
        const { name, text } = this.state.currentMessage;
        this.socket.emit("message", {name, text});
    }

    handleChangeName = (e) => {
        const currentMessage = Object.assign({}, this.state.currentMessage);
        currentMessage.name = e.target.value;
        this.setState({ currentMessage: currentMessage});
    }

    handleChangeMessage = (e) => {
        const currentMessage = Object.assign({}, this.state.currentMessage);
        currentMessage.text = e.target.value;
        this.setState({ currentMessage: currentMessage});
    }

    renderMessageList(messages) {
        if (messages && messages.length > 0) {
            console.log("Rendering messages list...");
            return <MessagesList messages={messages}></MessagesList>;
        }
    }

    render() {
        return(
            <div>
                <MessageField onChangeName={this.handleChangeName}
                onChangeMessage={this.handleChangeMessage}
                handleSendEvent={this.handleClick}></MessageField>
                {this.renderMessageList(this.state.messages)}
                
            </div>
            
        )
    }
}

export default Chat;