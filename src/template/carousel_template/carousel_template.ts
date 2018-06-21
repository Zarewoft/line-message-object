import { MessageObject } from "../../message_object";
import { CarouselColumn, CarouselColumnJSON } from "../../column";
import { ImageAspectRatio, ImageSize } from "../type";

type CarouselTemplateJSON = {
  type: string,
  columns: CarouselColumnJSON[],
  imageAspectRatio?: ImageAspectRatio,
  imageSize?: ImageSize
};

class CarouselTemplate extends MessageObject {
  private _type: string;
  private _columns: CarouselColumn[];
  private _imageAspectRatio?: ImageAspectRatio;
  private _imageSize?: ImageSize;

  constructor(columns: CarouselColumn[], imageAspectRatio?: ImageAspectRatio, imageSize?: ImageSize) {
    super();
    this._type = "carousel";
    this._columns = columns;
    this._imageAspectRatio = imageAspectRatio;
    this._imageSize = imageSize;
  }

  getJSON(): CarouselTemplateJSON {
    const columns = this._columns.map(column => column.getJSON());

    return {
      type: this._type,
      columns: columns,
      imageAspectRatio: this._imageAspectRatio,
      imageSize: this._imageSize,
    };
  }
}

export { CarouselTemplate, CarouselTemplateJSON };
