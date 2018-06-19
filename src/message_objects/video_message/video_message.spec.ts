import { assert } from "chai";
import { VideoMessage } from "./video_message";

describe("VideoMessage", () => {
  it("should construct video message 1", () => {
    const videoMessage = VideoMessage.New("https://content.mp4", "https://image.jpg")
    assert.deepEqual(videoMessage.message.getJSON(), {
      type: "video",
      originalContentUrl: "https://content.mp4",
      previewImageUrl: "https://image.jpg"
    });
  });

  it("should construct video message 2", () => {
    const videoMessage = VideoMessage.New("https://content2.mp4", "https://image2.jpg")
    assert.deepEqual(videoMessage.message.getJSON(), {
      type: "video",
      originalContentUrl: "https://content2.mp4",
      previewImageUrl: "https://image2.jpg"
    });
  });

  it("should return error when content url is undefined or empty", () => {
    const videoMessage = VideoMessage.New("", "https://image.jpg")
    assert.equal(videoMessage.error.message, "original content url is missing")
  });

  it("should return error when preview image url is undefined or empty", () => {
    const videoMessage = VideoMessage.New("https://content.mp4", "")
    assert.equal(videoMessage.error.message, "preview image url is missing");
  });

  it("should return error when content url is not https", () => {
    const videoMessage = VideoMessage.New("http://content2.mp4", "https://image.jpg")
    assert.equal(videoMessage.error.message, "original content url is require https protocol")
  });

  it("should return error when preview image url is not https", () => {
    const videoMessage = VideoMessage.New("https://content2.mp4", "http://image.jpg")
    assert.equal(videoMessage.error.message, "preview image url is require https protocol")
  });
});
