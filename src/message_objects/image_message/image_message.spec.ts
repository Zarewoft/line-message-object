import { ImageMessage } from "./image_message";
import { assert } from "chai";

describe("ImageMessage", () => {
    it("should construct with message 1", () => {
        const imageMessage = ImageMessage.New("https://www.img.com/img.jpg", "https://www.img.com/preview.jpg")
        assert.deepEqual(imageMessage.message.getJSON(), {
          type: "image",
          originalContentUrl: "https://www.img.com/img.jpg",
          previewImageUrl: "https://www.img.com/preview.jpg"
        });
    });

    it("should construct with message 2", () => {
      const imageMessage = ImageMessage.New("https://www.img2.com/img.jpg", "https://www.img2.com/preview.jpg")
      assert.deepEqual(imageMessage.message.getJSON(), {
        type: "image",
        originalContentUrl: "https://www.img2.com/img.jpg",
        previewImageUrl: "https://www.img2.com/preview.jpg"
      });
  });
});
