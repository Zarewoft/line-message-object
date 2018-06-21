import { MessageObject } from "../message_object";

type LocationJSON = {
  type: string,
  title: string,
  address: string,
  latitude: number,
  longitude: number
}

class LocationMessage extends MessageObject {
  private _type: string;
  private _title: string;
  private _address: string;
  private _latitude: number;
  private _longitude: number;

  constructor(title: string, address: string, latitute: number, longitude: number) {
    super();
    this._type = "location";
    this._title = title;
    this._address = address;
    this._latitude = latitute;
    this._longitude = longitude;
  }

  getJSON(): LocationJSON {
    return {
      type: this._type,
      title: this._title,
      address: this._address,
      latitude: this._latitude,
      longitude: this._longitude,
    };
  }
}

export { LocationMessage };
