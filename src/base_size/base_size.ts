import { MessageObject, MessageConstructResult } from "../message_objects/message_object";

type BaseSizeJSON = { width: number, height: number };

class BaseSize extends MessageObject {
  private _width: number;
  private _height: number;

  constructor(height: number) {
    super();
    this._width = 1040;
    this._height = height;
  }

  public static New(height: number): MessageConstructResult<BaseSize> {
    return { message: new BaseSize(height), error: null };
  }

  public getJSON(): BaseSizeJSON {
    return {
      width: this._width,
      height: this._height,
    };
  }
}

export { BaseSize, BaseSizeJSON };
