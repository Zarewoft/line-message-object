const { MessageObject } = require('../message_object');

class TextMessage extends MessageObject {
  /**
   * Create line message object type text
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#text-message
   * @param {string} text
   */
  constructor(text) {
    super();
    this.type = 'text';
    this.text = this._limitText(text, 2000);
  }
}

module.exports = { TextMessage };
