import { assert } from "chai";
import { StickerMessage } from "./sticker";

describe("StickerMessage", () => {
  it("should construct sticker message 1", () => {
    const stickerMessage = StickerMessage.New("packageId", "stickerId");
    assert.deepEqual(stickerMessage.message.getJSON(), {
      type: "sticker",
      packageId: "packageId",
      stickerId: "stickerId"
    });
  });

  it("should construct sticker message 2", () => {
    const stickerMessage = StickerMessage.New("packageId2", "stickerId2");
    assert.deepEqual(stickerMessage.message.getJSON(), {
      type: "sticker",
      packageId: "packageId2",
      stickerId: "stickerId2"
    });
  });

  it("should return error when packageId is undefined or empty", () => {
    const stickerMessage = StickerMessage.New("", "stickerId");
    assert.equal(stickerMessage.error.message, "package id is missing");
  });

  it("should return error when stickerId is undefined or empty", () => {
    const stickerMessage = StickerMessage.New("packageId", "");
    assert.equal(stickerMessage.error.message, "sticker id is missing");
  });

});
