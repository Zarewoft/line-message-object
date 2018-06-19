import { MessageObject, MessageConstructResult } from "../message_object";

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
  constructor(originalContentUrl: string, previewImageUrl: string) {
    super();
    this._type = "video";
    this._originalContentUrl = originalContentUrl;
    this._previewImageUrl = previewImageUrl;
  }

  /**
   * Create line message object type video
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#video-message
   * @param {string} originalContentUrl
   * @param {string} previewImageUrl
   * @returns {MessageConstructResult<VideoMessage>}
   */
  static New(originalContentUrl: string, previewImageUrl: string): MessageConstructResult<VideoMessage> {
    let error = MessageObject.validateURL(originalContentUrl);
    if (error) {
      error.message = `original content ${error.message}`;
      return { message: null, error };
    }

    error = MessageObject.validateURL(previewImageUrl);
    if (error) {
      error.message = `preview image ${error.message}`;
      return { message: null, error };
    }

    const videoMessage = new VideoMessage(originalContentUrl, previewImageUrl);
    return { message: videoMessage, error: null };
  }

  /**
   * Return line video message object
   *
   * @returns {VideoJSON}
   */
  getJSON(): VideoJSON {
    return {
      type: this._type,
      originalContentUrl: this._originalContentUrl,
      previewImageUrl: this._previewImageUrl
    };
  }
}

export { VideoMessage };
