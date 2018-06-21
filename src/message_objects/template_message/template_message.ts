import { MessageObject } from "../message_object";
import { TemplateType, TemplateJSONType } from "../../template";

type TemplateJSON = {
  type: string,
  altText: string,
  template: TemplateJSONType
};

class TemplateMessage extends MessageObject {
  private _type: string;
  private _altText: string;
  private _template: TemplateType;

  constructor(altText: string, template: TemplateType) {
    super();
    this._type = "template";
    this._altText = altText;
    this._template = template;
  }

  getJSON(): TemplateJSON {
    return {
      type: this._type,
      altText: this._altText,
      template: this._template.getJSON()
    };
  }
}

export { TemplateMessage };
