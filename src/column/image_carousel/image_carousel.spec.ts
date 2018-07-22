import { ImageCarouselColumn } from "./image_carousel";
import { URIAction, PostbackAction, MessageAction, DatetimePickerAction } from "../../action";
import { LabelImageCarousel } from "../../label"
import { assert } from "chai";

describe("ImageCarouselColumn", () => {
  it("should construct with action uri", () => {
    const action = new URIAction(new LabelImageCarousel("message1"), "www.zarewoft.com");
    const mesaageObj = ImageCarouselColumn.New("https://www.img.com/img.jpg", action);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      imageUrl: "https://www.img.com/img.jpg",
      action: {
        type: "uri",
        label: "message1",
        uri: "www.zarewoft.com"
      }
    });
  });

  it("should construct with action postback", () => {
    const action = new PostbackAction(new LabelImageCarousel("message2"), "postback");
    const mesaageObj = ImageCarouselColumn.New("https://www.img2.com/img2.jpg", action);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      imageUrl: "https://www.img2.com/img2.jpg",
      action: {
        type: "postback",
        label: "message2",
        data: "postback"
      }
    });
  });

  it("should construct with action message", () => {
    const action = new MessageAction(new LabelImageCarousel("message3"), "message action");
    const mesaageObj = ImageCarouselColumn.New("https://www.img2.com/img2.jpg", action);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      imageUrl: "https://www.img2.com/img2.jpg",
      action: {
        type: "message",
        label: "message3",
        text: "message action"
      }
    });
  });

  it("should construct with action datetime picker", () => {
    const action = new DatetimePickerAction(new LabelImageCarousel("message4"), "data", "datetime");
    const mesaageObj = ImageCarouselColumn.New("https://www.img2.com/img2.jpg", action);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      imageUrl: "https://www.img2.com/img2.jpg",
      action: {
        type: "datetimepicker",
        label: "message4",
        data: "data",
        mode: "datetime"
      }
    });
  });

  it("should return error when image url is undefined or empty", () => {
    const action = new URIAction(new LabelImageCarousel("message1"), "www.zarewoft.com");
    const mesaageObj = ImageCarouselColumn.New("", action);
    assert.equal(mesaageObj.error.message, "image url is missing")
  });

  it("should return error when image url is not https", () => {
    const action = new URIAction(new LabelImageCarousel("message1"), "www.zarewoft.com");
    const mesaageObj = ImageCarouselColumn.New("http://www.img.com/img.jpg", action);
    assert.equal(mesaageObj.error.message, "image url is required https protocol")
  });

  it("should return error when image url lenght is more than 1000", () => {
    const action = new URIAction(new LabelImageCarousel("message1"), "www.zarewoft.com");
    const mesaageObj = ImageCarouselColumn.New(
      "https://content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2content2.mp4",
      action)
    assert.equal(mesaageObj.error.message, "image url lenght is 1000 character max")
  });

  it("should return error when action is undefined or empty", () => {
    const mesaageObj = ImageCarouselColumn.New("https://www.img.com/img.jpg", undefined);
    assert.equal(mesaageObj.error.message, "action is missing")
  });

});
