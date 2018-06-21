import { MessageObject, MessageConstructResult } from "../../message_object";

type TextJSON = {
    type: string,
    text: string
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
    constructor(text: string) {
        super();
        this._type = "text";
        this._text = text;
    }

    static New(text: string): MessageConstructResult<TextMessage> {
      if (!text) {
        return { message: null, error: new Error("text is missing") };
      }
      const limitText = MessageObject.limitText(text, 2000);

      const textMessage = new TextMessage(limitText);
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
