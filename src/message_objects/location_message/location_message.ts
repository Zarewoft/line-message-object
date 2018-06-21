import { MessageObject, MessageConstructResult } from "../message_object";

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

  private constructor(title: string, address: string, latitude: number, longitude: number) {
    super();
    this._type = "location";
    this._title = title;
    this._address = address;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public static New(title: string, address: string, latitude: number, longitude: number): MessageConstructResult<LocationMessage> {
    title = MessageObject.limitText(title, 100);
    address = MessageObject.limitText(address, 100);
    const locationMessage = new LocationMessage(title, address, latitude, longitude);
    return { message: locationMessage, error: null };
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
