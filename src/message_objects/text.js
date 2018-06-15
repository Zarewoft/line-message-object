class TextMessage {
  /**
   * TextMessage create line message object type text
   *
   * ref: https://developers.line.me/en/docs/messaging-api/reference/#text-message
   * @param {string} text
   */
  constructor(text) {
    this.type = 'text';
    this.text = text;
  }
}

module.export = { TextMessage };
