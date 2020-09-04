import io from "socket.io-client";
import Constant from "../helpers/Constant";

class SocketManager {

    socket = null;

    constructor() {
        this.socket = io(Constant.ENDPOINT);
    }

    // initSocket() {
    //     this.socket = io(Constant.ENDPOINT);

    // }
    
    async catchNewMessage() {
        // const message = await this.socket.on("message");
        // await console.log("inside catchNewMessage")
        // return message;
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
    }



}

export default SocketManager;