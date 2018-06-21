import { MessageObject } from "../../message_objects/message_object";
import { ActionType, ActionJSONType } from "../../action";

type ImageCarouselColumnJSON = {
  imageUrl: string
  action: ActionJSONType,
};

class ImageCarouselColumn extends MessageObject {
  private _imageUrl: string;
  private _action: ActionType;

  getJSON(): ImageCarouselColumnJSON {
    return {
      imageUrl: this._imageUrl,
      action: this._action.getJSON()
    };
  }
}

export { ImageCarouselColumn, ImageCarouselColumnJSON }
