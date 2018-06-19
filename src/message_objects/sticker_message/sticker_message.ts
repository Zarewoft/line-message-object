import { MessageObject, MessageConstructResult } from "../message_object";

type StickerJSON = {
  type: string,
  packageId: string,
  stickerId: string
};

class StickerMessage extends MessageObject {
  private _type: string;
  private _packageId: string;
  private _stickerId: string;

  /**
   * Create line message object type sticker
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#sticker-message
   * @param {string} packageId
   * @param {string} stickerId
   */
  constructor(packageId: string, stickerId: string) {
    super();
    this._packageId = packageId;
    this._stickerId = stickerId;
    this._type = "sticker";
  }

  /**
   * Create line message object type sticker with validate required field
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#sticker-message
   * @param {string} packageId
   * @param {string} stickerId
   * @returns {MessageConstructResult<StickerMessage>}
   */
  static New(packageId: string, stickerId: string): MessageConstructResult<StickerMessage> {
    if (!packageId) {
      return { message: null, error: new Error("package id is missing") };
    }
    if (!stickerId) {
      return { message: null, error: new Error("sticker id is missing") };
    }
    const message = new StickerMessage(packageId, stickerId);
    return { message: message, error: null };
  }

  getJSON(): StickerJSON {
    return {
      type: this._type,
      packageId: this._packageId,
      stickerId: this._stickerId
    };
  }
}

export { StickerMessage };
