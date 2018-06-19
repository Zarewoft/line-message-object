import { ImageMessage } from "./image_message";
import { assert } from "chai";

describe("ImageMessage", () => {
    it("should construct with type 'image'", () => {
        const imageMessage = new ImageMessage();
        assert.equal(imageMessage.getJSON().type, "image");
    });
});
