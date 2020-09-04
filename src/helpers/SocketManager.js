import io from "socket.io-client";
import Constant from "../helpers/Constant";

class SocketManager {

    static socket = io(Constant.ENDPOINT);

    constructor() {
        this.socket = io(Constant.ENDPOINT);
    }
    
    static catchNewMessage(callback) {
        this.socket.on("message", message => {
            console.log("THEN response");
            console.log(message);
            callback(message);
        });
    }

    static emitMessage(message) {
        this.socket.emit("message", message);
    }



}

export default SocketManager;