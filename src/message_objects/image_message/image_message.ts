import { MessageObject, MessageConstructResult } from "../message_object";

type ImageJSON = {
  type: string,
  originalContentUrl: string,
  previewImageUrl: string
}

class ImageMessage extends MessageObject {
  private _type: string;
  private _originalContentUrl: string;
  private _previewImageUrl: string;

  constructor(originalContentUrl: string, previewImageUrl: string) {
    super();
    this._type = "image";
    this._originalContentUrl = originalContentUrl;
    this._previewImageUrl = previewImageUrl;
  }

  static New(originalContentUrl: string, previewImageUrl: string): MessageConstructResult<ImageMessage> {
    if (!originalContentUrl) {
      return { message: null, error: new Error("original content url is missing") };
    } else if (!originalContentUrl.startsWith("https://", 0)) {
      return { message: null, error: new Error("original content url is require https protocol") };
    }

    if (!previewImageUrl) {
      return { message: null, error: new Error("preview image url is missing") };
    } else if (!previewImageUrl.startsWith("https://", 0)) {
      return { message: null, error: new Error("preview image url is require https protocol") };
    }

    const imageMessage = new ImageMessage(originalContentUrl, previewImageUrl);
    return {
      message: imageMessage,
      error: null
    };
  }

  getJSON(): ImageJSON {
    return {
      type: this._type,
      originalContentUrl: this._originalContentUrl,
      previewImageUrl: this._previewImageUrl
    };
  }
}

export { ImageMessage }
