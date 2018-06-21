import { MessageObject } from "../../message_objects/message_object";
import { ActionType, ActionJSONType } from "../../action";

type ConfirmTemplateJSON = {
  type: string,
  text: string,
  actions: ActionJSONType[]
};

class ConfirmTemplate extends MessageObject {
  private _type: string;
  private _text: string;
  private _actions: ActionType[];

  constructor(text: string, actions: ActionType[]) {
    super();
    this._type = "confirm";
    this._text = text;
    this._actions = actions;
  }

  getJSON(): ConfirmTemplateJSON {
    const actions = this._actions.map(action => action.getJSON());
    return {
      type: this._type,
      text: this._text,
      actions: actions,
    };
  }
}

export { ConfirmTemplate };
