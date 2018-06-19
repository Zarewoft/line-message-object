import { assert } from "chai";
import { StickerMessage } from "./sticker_message";

describe("StickerMessage", () => {
  it("should construct type property 'sticker'", () => {
    const stickerMessage = new StickerMessage();
    assert.equal(stickerMessage.getJSON().type, "sticker");
  });

  it("should construct packageId property", () => {
    const stickerMessage = new StickerMessage("packageId");
    assert.equal(stickerMessage.getJSON().packageId, "packageId");
  });

  it("should construct stickerId property", () => {
    const stickerMessage = new StickerMessage(null, "stickerId");
    assert.equal(stickerMessage.getJSON().stickerId, "stickerId");
  });
});
