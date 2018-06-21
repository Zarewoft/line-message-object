import { MessageObject } from "../../message_object";
import { LabelType } from "../../label";

type MessageJSON = {
  type: string,
  label?: string,
  text: string
};

class MessageAction extends MessageObject {
  private _type: string;
  private _label: LabelType;
  private _text: string;

  constructor(label: LabelType, text: string) {
    super();
    this._type = "message";
    this._label = label;
    this._text = text;
  }

  getJSON(): MessageJSON {
    return {
      type: this._type,
      label: this._label.getValue(),
      text: this._text
    };
  }
}

export { MessageAction, MessageJSON };
