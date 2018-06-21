import { LocationMessage } from "./location_message";
import { assert } from "chai";

describe("LocationMessage", () => {
  it("should construct with message 1", () => {
    const mesaageObj = LocationMessage.New("title", "address", 0, 0);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      type: "location",
      title: "title",
      address: "address",
      latitude: 0,
      longitude: 0
    });
  });

  it("should construct with message 2", () => {
    const mesaageObj = LocationMessage.New("title 2", "address 2", 1, 2);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      type: "location",
      title: "title 2",
      address: "address 2",
      latitude: 1,
      longitude: 2
    });
  });

  it("should slice title if over 100 characters", () => {
    const title = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m.`;
    const mesaageObj = LocationMessage.New(title, "address 2", 1, 2);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      type: "location",
      title: title.slice(0, 100),
      address: "address 2",
      latitude: 1,
      longitude: 2
    });
  });

  it("should slice address if over 100 characters", () => {
    const address = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m.`;
    const mesaageObj = LocationMessage.New("title", address, 1, 2);
    assert.deepEqual(mesaageObj.message.getJSON(), {
      type: "location",
      title: "title",
      address: address.slice(0, 100),
      latitude: 1,
      longitude: 2
    });
  });
});
