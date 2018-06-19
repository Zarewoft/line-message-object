import { MessageObject } from "../message_object";

type ImageJSON = {
    type: string
}

class ImageMessage extends MessageObject {
    private _type: string;

    constructor() {
        super();
        this._type = "image";
    }

    static New(): ImageMessage {
        const imageMessage = new ImageMessage();
        return imageMessage;
    }

    getJSON(): ImageJSON {
        return {
            type: this._type
        };
    }
}

export { ImageMessage }