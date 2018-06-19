import { MessageObject } from "../message_object";

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
  constructor(packageId: string = "", stickerId: string = "") {
    super();
    this._packageId = packageId;
    this._stickerId = stickerId;
    this._type = "sticker";
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