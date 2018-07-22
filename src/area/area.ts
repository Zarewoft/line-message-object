import { MessageObject, MessageConstructResult } from "../message_object";

type AreaJSON = {
  x: number,
  y: number,
  width: number,
  height: number,
};

class Area extends MessageObject {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  constructor(x: number, y: number, width: number, height: number) {
    super();
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  public static New(x: number, y: number, width: number, height: number): MessageConstructResult<Area> {
    const area = new Area(x, y, width, height);
    return { message: area, error: null };
  }

  public getJSON(): AreaJSON {
    return {
      x: this._x,
      y: this._y,
      width: this._width,
      height: this._height,
    };
  }
}

export { Area, AreaJSON };
