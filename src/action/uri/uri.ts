import { MessageObject } from "../../message_objects/message_object";
import { LabelType } from "../../label";

type URIJSON = {
  type: string,
  label?: string,
  uri: string
};

class URIAction extends MessageObject {
  private _type: string;
  private _label: LabelType;
  private _uri: string;

  constructor(label: LabelType, uri: string) {
    super();
    this._type = "uri";
    this._label = label;
    this._uri = uri;
  }

  getJSON(): URIJSON {
    return {
      type: this._type,
      label: this._label.getValue(),
      uri: this._uri
    };
  }
}

export { URIAction, URIJSON };
