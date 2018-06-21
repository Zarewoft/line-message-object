import { MessageAction, MessageJSON } from "./message_action/message_action";
import { PostbackAction, PostbackJSON } from "./postback_action/postback_action";
import { URIAction, URIJSON } from "./uri_action/uri_action";
import { DatetimePickerAction, DatetimePickerJSON } from "./datetime_picker_action/datetime_picker_action";

type ActionType = MessageAction | PostbackAction | URIAction | DatetimePickerAction;
type ActionJSONType = MessageJSON | PostbackJSON | URIJSON | DatetimePickerJSON;

export { ActionType, ActionJSONType, MessageAction, PostbackAction, URIAction, DatetimePickerAction }
