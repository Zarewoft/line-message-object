import { MessageObject } from "../message_object";

/**
 * StickerMessage
 */
class StickerMessage extends MessageObject {
  type: string
  packageId: string
  stickerId: string

  constructor(packageId: string = "", stickerId: string = "") {
    super();
    this.packageId = packageId;
    this.stickerId = stickerId;
    this.type = "sticker";
  }
}

export { StickerMessage };
