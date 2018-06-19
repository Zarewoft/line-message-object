import { MessageObject } from "../message_object";

type TextJSON = {
    type: string,
    text: string
};

type TextMessageConstructResult = {
  message: TextMessage,
  error: Error
};

class TextMessage extends MessageObject {
    private _type: string;
    private _text: string;
    /**
     * Create line message object type text
     *
     * ref: https://developers.line.me/en/docs/messaging-api/reference/#text-message
     * @param {string} text
     */
    constructor() {
        super();
        this._type = "text";
    }

    static New(text: string): TextMessageConstructResult {
      const textMessage = new TextMessage();
      textMessage._text = textMessage._limitText(text, 2000);
      return {
        message: textMessage,
        error: null
      };
    }

    getJSON(): TextJSON {
        return {
            type: this._type,
            text: this._text
        };
    }
}

export { TextMessage };
