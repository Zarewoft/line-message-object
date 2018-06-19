import { MessageObject } from "../message_object";

class StickerMessage extends MessageObject {
  type: string;
  packageId: string;
  stickerId: string;

  /**
   * Create line message object type sticker
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#sticker-message
   * @param {string} packageId
   * @param {string} stickerId
   */
  constructor(packageId: string = "", stickerId: string = "") {
    super();
    this.packageId = packageId;
    this.stickerId = stickerId;
    this.type = "sticker";
  }
}

export { StickerMessage };
