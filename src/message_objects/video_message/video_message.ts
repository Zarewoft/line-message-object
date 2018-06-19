import { MessageObject } from "../message_object";

class VideoMessage extends MessageObject {
  type: string;
  originalContentUrl: string;
  previewImageUrl: string;

  /**
   * Create line message object type video
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#video-message
   * @param {string} originalContentUrl
   * @param {string} previewImageUrl
   */
  constructor(originalContentUrl: string = "", previewImageUrl: string = "") {
    super();
    this.type = "video";
    this.originalContentUrl = originalContentUrl;
    this.previewImageUrl = previewImageUrl;
  }
}

export { VideoMessage };
