import { MessageObject, MessageConstructResult } from "../message_object";

type ImageJSON = {
  type: string,
  originalContentUrl: string,
  previewImageUrl: string
};

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
    let error = MessageObject.validateURL(originalContentUrl);
    if (error) {
      error.message = `original content ${error.message}`;
      return { message: null, error: error };
    }

    error = MessageObject.validateURL(previewImageUrl);
    if (error) {
      error.message = `preview image ${error.message}`;
      return { message: null, error: error };
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

export { ImageMessage };
