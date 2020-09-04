import Constant from "../helpers/Constant";

export default class ChatActionsManager {
    
    static async getMessagesHistory() {
        const response = await fetch(Constant.ENDPOINT + "/messages");
        const messages = await response.json();
        console.log("getMessagesHistory");
        console.log(messages);
        return messages;
    }
}