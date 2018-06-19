import { MessageObject, MessageConstructResult } from "../message_object";

type ImageJSON = {
  type: string
}

class ImageMessage extends MessageObject {
  private _type: string;

  constructor() {
    super();
    this._type = "image";
  }

  static New(originalContentUrl: string): MessageConstructResult {
    const imageMessage = new ImageMessage();
    return {
      message: imageMessage,
      error: null
    };
  }

  getJSON(): ImageJSON {
    return {
      type: this._type
    };
  }
}

export { ImageMessage }
