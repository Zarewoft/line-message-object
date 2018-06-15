class MessageObject {
  /**
   *
   * @param {string} text
   * @param {number} maxCharacters
   * @returns {string}
   */
  _limitText(text = "", maxCharacters) {
    if (text.length > maxCharacters) {
      return text.slice(0, maxCharacters);
    }
    return text;
  }
}

module.exports = { MessageObject }
