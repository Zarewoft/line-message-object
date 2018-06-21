import { MessageObject, MessageConstructResult } from "../../message_objects/message_object";
import { Area, AreaJSON } from "../../area";
import { Label } from "../../label";

type ImagemapMessageActionJSON = {
  type: string,
  label?: string,
  text: string,
  area: AreaJSON
};

class ImagemapMessageAction extends MessageObject {
  private _type: string;
  private _label: Label;
  private _text: string;
  private _area: Area;

  private constructor(label: Label, text: string, area: Area) {
    super();
    this._type = "uri";
    this._label = label;
    this._text = text;
    this._area = area;
  }

  public static New(text: string, area: Area, label?: string): MessageConstructResult<ImagemapMessageAction> {
    let message: ImagemapMessageAction = null;
    let error: Error = null;
    message = new ImagemapMessageAction(
      new Label(MessageObject.limitText(label, 50)),
      MessageObject.limitText(text, 400),
      area);
    return { message, error };
  }

  public getJSON(): ImagemapMessageActionJSON {
    return {
      type: this._type,
      label: this._label.getValue(),
      text: this._text,
      area: this._area.getJSON()
    };
  }
}

export { ImagemapMessageAction, ImagemapMessageActionJSON };
