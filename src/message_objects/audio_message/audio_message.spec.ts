import { AudioMessage } from "./audio_message";
import { assert } from "chai";

describe("AudioMessage", () => {
  it("should construct with message 1", () => {
    const audioMessage = AudioMessage.New("https://www.audio.com/audio.m4a", 100);
    assert.deepEqual(audioMessage.message.getJSON(), {
      type: "audio",
      originalContentUrl: "https://www.audio.com/audio.m4a",
      duration: 100
    });
  });

  it("should construct with message 2", () => {
    const audioMessage = AudioMessage.New("https://www.audio2.com/audio.m4a", 200)
    assert.deepEqual(audioMessage.message.getJSON(), {
      type: "audio",
      originalContentUrl: "https://www.audio2.com/audio.m4a",
      duration: 200
    });
  });

  it("should return error when content url is undefined or empty", () => {
    const audioMessage = AudioMessage.New("", 10)
    assert.equal(audioMessage.error.message, "original content url is missing")
  });

  it("should return error when content url is not https", () => {
    const audioMessage = AudioMessage.New("http://content2.m4a", 10)
    assert.equal(audioMessage.error.message, "original content url is required https protocol")
  });

  it("should return error when content url lenght is more than 1000", () => {
    const audioMessage = AudioMessage.New(
      "https://content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2.m4a",
      10)
    assert.equal(audioMessage.error.message, "original content url lenght is 1000 character max")
  });

  it("should return error when duration is undefined or empty", () => {
    const audioMessage = AudioMessage.New("https://content.m4a", null)
    assert.equal(audioMessage.error.message, "duration is missing");
  });
});
