import { MessageAction, MessageJSON } from "./message/message";
import { PostbackAction, PostbackJSON } from "./postback/postback";
import { URIAction, URIJSON } from "./uri/uri";
import { DatetimePickerAction, DatetimePickerJSON } from "./datetime_picker/datetime_picker";

type ActionType = MessageAction | PostbackAction | URIAction | DatetimePickerAction;
type ActionJSONType = MessageJSON | PostbackJSON | URIJSON | DatetimePickerJSON;

export { ActionType, ActionJSONType, MessageAction, PostbackAction, URIAction, DatetimePickerAction }
