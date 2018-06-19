import { assert } from "chai";
import { VideoMessage } from "./video_message";

describe("VideoMessage", () => {
  it("should construct type property 'video'", () => {
    const videoMessage = new VideoMessage();
    assert.equal(videoMessage.type, "video");
  });

  it("should construct originalContentUrl property", () => {
    const videoMessage = new VideoMessage("originalContentUrl");
    assert.equal(videoMessage.originalContentUrl, "originalContentUrl");
  });

  it("should construct previewImageUrl property", () => {
    const videoMessage = new VideoMessage(null, "previewImageUrl");
    assert.equal(videoMessage.previewImageUrl, "previewImageUrl");
  });

  it("should construct default value with empty string for originalContentUrl property", () => {
    const videoMessage = new VideoMessage();
    assert.equal(videoMessage.originalContentUrl, "");
  });

  it("should construct default value with empty string for previewImageUrl property", () => {
    const videoMessage = new VideoMessage();
    assert.equal(videoMessage.previewImageUrl, "");
  });
});
