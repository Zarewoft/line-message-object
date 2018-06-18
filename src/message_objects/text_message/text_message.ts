import { MessageObject } from "../message_object";

class TextMessage extends MessageObject {
    text: string
    type: string
    /**
     * Create line message object type text
     *
     * ref: https://developers.line.me/en/docs/messaging-api/reference/#text-message
     * @param {string} text
     */
    constructor(text: string) {
        super();
        this.type = "text";
        this.text = this.limitText(text, 2000);
    }
}

export { TextMessage }