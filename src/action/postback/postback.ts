import { MessageObject } from "../../message_object";
import { LabelType } from "../../label";

type PostbackJSON = {
  type: string,
  label?: string,
  data: string,
  displayText?: string,
};

class PostbackAction extends MessageObject {
  private _type: string;
  private _label: LabelType;
  private _data: string;
  private _displayText?: string;

  constructor(label: LabelType, data: string, displayText?: string) {
    super();
    this._type = "postback";
    this._label = label;
    this._data = data;
    this._displayText = displayText;
  }

  getJSON(): PostbackJSON {
    return {
      type: this._type,
      label: this._label.getValue(),
      data: this._data,
      displayText: this._displayText,
    };
  }
}

export { PostbackAction, PostbackJSON };
