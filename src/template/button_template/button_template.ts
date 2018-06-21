import { MessageObject } from "../../message_objects/message_object";
import { ActionType, ActionJSONType } from "../../action";

type ButtonTemplateJSON = {
  type: string,
  thumbnailImageUrl: string,
  text: string,
  actions: ActionJSONType[]
  imageAspectRatio?: string,
  imageSize?: string,
  imageBackgroundColor?: string,
  title?: string,
  defaultAction?: ActionJSONType,
};

class ButtonTemplate extends MessageObject {
  private _type: string;
  private _thumbnailImageUrl: string;
  private _text: string;
  private _actions: ActionType[];
  private _imageAspectRatio?: string;
  private _imageSize?: string;
  private _imageBackgroundColor?: string;
  private _title?: string;
  private _defaultAction?: ActionType;

  constructor(thumbnailImageUrl: string, text: string, actions: ActionType[], imageAspectRatio?: string, imageSize?: string, imageBackgroundColor?: string, title?: string, defaultAction?: ActionType) {
    super();
    this._type = "buttons";
    this._thumbnailImageUrl = thumbnailImageUrl;
    this._text = text;
    this._actions = actions;
    this._imageAspectRatio = imageAspectRatio;
    this._imageSize = imageSize;
    this._imageBackgroundColor = imageBackgroundColor;
    this._title = title;
    this._defaultAction = defaultAction;
  }

  getJSON(): ButtonTemplateJSON {
    const actions = this._actions.map(action => action.getJSON());
    return {
      type: this._type,
      thumbnailImageUrl: this._thumbnailImageUrl,
      text: this._text,
      actions: actions,
      imageAspectRatio: this._imageAspectRatio,
      imageSize: this._imageSize,
      imageBackgroundColor: this._imageBackgroundColor,
      title: this._title,
      defaultAction: this._defaultAction.getJSON()
    };
  }
}

export { ButtonTemplate };
