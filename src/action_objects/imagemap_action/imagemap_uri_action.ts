import { MessageObject, MessageConstructResult } from "../../message_objects/message_object";
import { Area, AreaJSON } from "../../area";
import { Label } from "../../label";

type ImagemapURIActionJSON = {
  type: string,
  label?: string,
  linkUri: string,
  area: AreaJSON
};

class ImagemapURIAction extends MessageObject {
  private _type: string;
  private _label: Label;
  private _linkUri: string;
  private _area: Area;

  private constructor(label: Label, linkUri: string, area: Area) {
    super();
    this._type = "uri";
    this._label = label;
    this._linkUri = linkUri;
    this._area = area;
  }

  public static New(linkUri: string, area: Area, label?: string): MessageConstructResult<ImagemapURIAction> {
    let message: ImagemapURIAction = null;
    let error: Error = null;
    message = new ImagemapURIAction(
      new Label(MessageObject.limitText(label, 50)),
      MessageObject.limitText(linkUri, 1000),
      area);
    return { message, error };
  }

  public getJSON(): ImagemapURIActionJSON {
    return {
      type: this._type,
      label: this._label.getValue(),
      linkUri: this._linkUri,
      area: this._area.getJSON()
    };
  }
}

export { ImagemapURIAction, ImagemapURIActionJSON };
