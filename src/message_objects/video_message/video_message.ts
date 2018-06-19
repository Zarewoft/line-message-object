import { MessageObject } from "../message_object";

type VideoJSON = {
  type: string,
  originalContentUrl: string,
  previewImageUrl: string
};

class VideoMessage extends MessageObject {
  private _type: string;
  private _originalContentUrl: string;
  private _previewImageUrl: string;

  /**
   * Create line message object type video
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#video-message
   * @param {string} originalContentUrl
   * @param {string} previewImageUrl
   */
  constructor(originalContentUrl: string = "", previewImageUrl: string = "") {
    super();
    this._type = "video";
    this._originalContentUrl = originalContentUrl;
    this._previewImageUrl = previewImageUrl;
  }

  getJSON(): VideoJSON {
    return {
      type: this._type,
      originalContentUrl: this._originalContentUrl,
      previewImageUrl: this._previewImageUrl
    };
  }
}

export { VideoMessage };
