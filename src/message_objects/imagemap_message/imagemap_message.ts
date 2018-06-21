import { MessageObject } from "../message_object";

type ImagemapArea = {
  x: number,
  y: number,
  width: number,
  height: number
};

type ImagemapAction = {
  type: string,
  label?: string,
  linkUri: string,
  area: ImagemapArea
};

type ImagemapBaseSize = {
  width: number,
  height: number
};

type ImagemapJSON = {
  type: string,
  baseUrl: string,
  altText: string,
  baseSize: ImagemapBaseSize,
  actions: ImagemapAction[]
};

class ImagemapMessage extends MessageObject {
  private _type: string;
  private _baseUrl: string;
  private _altText: string;
  private _baseSize: ImagemapBaseSize;
  private _actions: ImagemapAction[];

  constructor(baseUrl: string, altText: string, baseSize: ImagemapBaseSize, actions: ImagemapAction[]) {
    super();
    this._type = "imagemap";
    this._baseUrl = baseUrl;
    this._altText = altText;
    this._baseSize.width = 1040;
    this._baseSize.height = baseSize.height;
    this._actions = actions;
  }

  getJSON(): ImagemapJSON {
    return {
      type: this._type,
      baseUrl: this._baseUrl,
      altText: this._altText,
      baseSize: this._baseSize,
      actions: this._actions
    };
  }
}

export { ImagemapMessage };
