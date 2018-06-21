import { MessageObject, MessageConstructResult } from "../../message_object";
import { BaseSize, BaseSizeJSON } from "../../base_size";
import { ImagemapURIAction, ImagemapURIActionJSON } from "../../action_objects/imagemap_action/imagemap_uri_action";
import { ImagemapMessageAction, ImagemapMessageActionJSON } from "../../action_objects/imagemap_action/imagemap_message_action";

type ImagemapJSON = {
  type: string,
  baseUrl: string,
  altText: string,
  baseSize: BaseSizeJSON,
  actions: (ImagemapURIActionJSON | ImagemapMessageActionJSON)[],
};

class ImagemapMessage extends MessageObject {
  private _type: string;
  private _baseUrl: string;
  private _altText: string;
  private _baseSize: BaseSize;
  private _actions: (ImagemapURIAction | ImagemapMessageAction)[];

  private constructor(baseUrl: string, altText: string, baseSize: BaseSize, actions: (ImagemapURIAction | ImagemapMessageAction)[]) {
    super();
    this._type = "imagemap";
    this._baseUrl = baseUrl;
    this._altText = altText;
    this._baseSize = baseSize;
    this._actions = actions;
  }

  public static New(baseUrl: string, altText: string, baseSize: BaseSize, actions: (ImagemapURIAction | ImagemapMessageAction)[]): MessageConstructResult<ImagemapMessage> {
    let message: ImagemapMessage;
    let error: Error;

    if (error = MessageObject.validateURL(baseUrl)) {
      error.message = `base ${error.message}`;
      return { message, error };
    }

    altText = MessageObject.limitText(altText, 400);
    message = new ImagemapMessage(baseUrl, altText, baseSize, actions);
    return { message, error };
  }

  getJSON(): ImagemapJSON {
    return {
      type: this._type,
      baseUrl: this._baseUrl,
      altText: this._altText,
      baseSize: this._baseSize.getJSON(),
      actions: this._actions.map(action => action.getJSON()),
    };
  }
}

export { ImagemapMessage };
