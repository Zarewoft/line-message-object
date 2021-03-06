import { MessageObject } from "../../message_object";
import { ActionType, ActionJSONType } from "../../action";

type CarouselColumnJSON = {
  text: string,
  actions: ActionJSONType[],
  thumbnailImageUrl?: string,
  imageBackgroundColor?: string,
  title? : string,
  defaultAction? : ActionJSONType
};

class CarouselColumn extends MessageObject {
  private _text: string;
  private _actions: ActionType[];
  private _thumbnailImageUrl?: string;
  private _imageBackgroundColor?: string;
  private _title? : string;
  private _defaultAction? : ActionType;

  getJSON(): CarouselColumnJSON {
    const actions = this._actions.map(action => action.getJSON());
    return {
      text: this._text,
      actions: actions,
      thumbnailImageUrl: this._thumbnailImageUrl,
      imageBackgroundColor: this._imageBackgroundColor,
      title: this._title,
      defaultAction: this._defaultAction.getJSON()
    };
  }
}

export { CarouselColumn, CarouselColumnJSON }
