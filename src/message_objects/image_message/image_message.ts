import { MessageObject } from "../message_object";

class ImageMessage extends MessageObject {
    type: string

    constructor() {
        super();
        this.type = "image";
    }
}

export { ImageMessage }