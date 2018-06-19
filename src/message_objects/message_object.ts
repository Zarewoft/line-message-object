abstract class MessageObject {
  /**
   *
   * @param {string} text
   * @param {number} maxCharacters
   * @returns {string}
   */
  protected _limitText(text: string = "", maxCharacters: number) {
    if (text.length > maxCharacters) {
      return text.slice(0, maxCharacters);
    }
    return text;
  }

  protected _isTextOffLimit(text: string = "", maxCharacters: number) {
    return text.length > maxCharacters;
  }

  abstract getJSON(): object
}

export { MessageObject };
