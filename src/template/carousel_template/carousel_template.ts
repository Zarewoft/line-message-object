import { MessageObject } from "../../message_objects/message_object";
import { ColumnObject, ColumnObjectJSON } from "../colummn_object/column_object";
import { ImageAspectRatio, ImageSize } from "../type";

type CarouselTemplateJSON = {
  type: string,
  columns: ColumnObjectJSON[],
  imageAspectRatio?: ImageAspectRatio,
  imageSize?: ImageSize
};

class CarouselTemplate extends MessageObject {
  private _type: string;
  private _columns: ColumnObject[];
  private _imageAspectRatio?: ImageAspectRatio;
  private _imageSize?: ImageSize;

  constructor(columns: ColumnObject[], imageAspectRatio?: ImageAspectRatio, imageSize?: ImageSize) {
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

export { CarouselTemplate };
