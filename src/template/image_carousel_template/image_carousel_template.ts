import { MessageObject } from "../../message_objects/message_object";
import { ImageCarouselColumn, ImageCarouselColumnJSON } from "../../column";
import { ImageAspectRatio, ImageSize } from "../type";

type ImageCarouselTemplateJSON = {
  type: string,
  columns: ImageCarouselColumnJSON[],
};

class ImageCarouselTemplate extends MessageObject {
  private _type: string;
  private _columns: ImageCarouselColumn[];

  constructor(columns: ImageCarouselColumn[]) {
    super();
    this._type = "image_carousel";
    this._columns = columns;
  }

  getJSON(): ImageCarouselTemplateJSON {
    const columns = this._columns.map(column => column.getJSON());

    return {
      type: this._type,
      columns: columns,
    };
  }
}

export { ImageCarouselTemplate, ImageCarouselTemplateJSON };
