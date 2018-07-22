import { ImageMessage } from "./image";
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

  it("should return error when content url is undefined or empty", () => {
    const imageMessage = ImageMessage.New("", "https://image.jpg")
    assert.equal(imageMessage.error.message, "original content url is missing")
  });

  it("should return error when content url is not https", () => {
    const imageMessage = ImageMessage.New("http://content2.mp4", "https://image.jpg")
    assert.equal(imageMessage.error.message, "original content url is required https protocol")
  });

  it("should return error when content url lenght is more than 1000", () => {
    const imageMessage = ImageMessage.New(
      "https://content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2.mp4",
      "https://image.jpg")
    assert.equal(imageMessage.error.message, "original content url lenght is 1000 character max")
  });

  it("should return error when preview image url is undefined or empty", () => {
    const imageMessage = ImageMessage.New("https://content.mp4", "")
    assert.equal(imageMessage.error.message, "preview image url is missing");
  });

  it("should return error when preview image url is not https", () => {
    const imageMessage = ImageMessage.New("https://content2.mp4", "http://image.jpg")
    assert.equal(imageMessage.error.message, "preview image url is required https protocol")
  });

  it("should return error when content url lenght is more than 1000", () => {
    const imageMessage = ImageMessage.New(
      "https://image.jpg",
      "https://content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2.mp4"
    )
    assert.equal(imageMessage.error.message, "preview image url lenght is 1000 character max")
  });
});
