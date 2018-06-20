import { MessageObject, MessageConstructResult } from "../message_object";

type AudioJSON = {
  type: string,
  originalContentUrl: string,
  duration: number
}

class AudioMessage extends MessageObject {
  private _type: string;
  private _originalContentUrl: string;
  private _duration: number;

  constructor(originalContentUrl: string, duration: number) {
    super();
    this._type = "audio";
    this._originalContentUrl = originalContentUrl;
    this._duration = duration;
  }

  static New(originalContentUrl: string, duration: number): MessageConstructResult<AudioMessage> {
    let error = MessageObject.validateURL(originalContentUrl);
    if (error) {
      error.message = `original content ${error.message}`;
      return { message: null, error };
    }

    if (!duration) {
      return { message: null, error: new Error("duration is missing") };
    }

    const audioMessage = new AudioMessage(originalContentUrl, duration);
    return {
      message: audioMessage,
      error: null
    };
  }

  getJSON(): AudioJSON {
    return {
      type: this._type,
      originalContentUrl: this._originalContentUrl,
      duration: this._duration
    };
  }
}

export { AudioMessage }
