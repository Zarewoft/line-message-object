import { MessageObject, MessageConstructResult } from "../../message_object";
import { ActionType, ActionJSONType } from "../../action";

type ImageCarouselColumnJSON = {
  imageUrl: string
  action: ActionJSONType,
};

class ImageCarouselColumn extends MessageObject {
  private _imageUrl: string;
  private _action: ActionType;

  constructor(imageUrl: string, action: ActionType) {
    super();
    this._imageUrl = imageUrl;
    this._action = action;
  }

  static New(imageUrl: string, action: ActionType): MessageConstructResult<ImageCarouselColumn> {
    let error = this.validateURL(imageUrl);
    if (error) {
      error.message = `image ${error.message}`;
      return { message: null, error };
    }

    if (!action) {
      return { message: null, error: new Error("action is missing") };
    }

    const imageCarouselColumn = new ImageCarouselColumn(imageUrl, action);
    return {
      message: imageCarouselColumn,
      error: null
    };
  }

  getJSON(): ImageCarouselColumnJSON {
    return {
      imageUrl: this._imageUrl,
      action: this._action.getJSON()
    };
  }
}

export { ImageCarouselColumn, ImageCarouselColumnJSON }
