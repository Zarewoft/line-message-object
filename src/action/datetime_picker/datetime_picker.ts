import { MessageObject } from "../../message_object";
import { LabelType } from "../../label";
import { DateTime } from "luxon";

type Mode = "date" | "time" | "datetime";

type DatetimePickerJSON = {
  type: string,
  label?: string,
  data: string,
  mode: Mode,
  initial?: string,
  max?: string,
  min?: string
};

type Datetime = Date | DateTime;

class DatetimePickerAction extends MessageObject {
  private _type: string;
  private _label: LabelType;
  private _data: string;
  private _mode: Mode;
  private _initial?: string;
  private _max?: string;
  private _min?: string;

  constructor(label: LabelType, data: string, mode: Mode, initial?: string, max?: string, min?: string) {
    super();
    this._type = "datetimepicker";
    this._label = label;
    this._data = data;
    this._mode = mode;
    this._initial = initial;
    this._max = max;
    this._min = min;
  }

  getJSON(): DatetimePickerJSON {
    return {
      type: this._type,
      label: this._label.getValue(),
      data: this._data,
      mode: this._mode,
      initial: this._initial,
      max: this._max,
      min: this._min
    };
  }
}

export { DatetimePickerAction, DatetimePickerJSON };
