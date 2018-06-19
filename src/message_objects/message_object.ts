type MessageConstructResult<T extends MessageObject> = {
  message: T,
  error: Error
};

abstract class MessageObject {
  /**
   *
   * @param {string} text
   * @param {number} maxCharacters
   * @returns {string}
   */
  static limitText(text: string, maxCharacters: number) {
    if (text.length > maxCharacters) {
      return text.slice(0, maxCharacters);
    }
    return text;
  }

  static isTextOffLimit(text: string, maxCharacters: number) {
    return text.length > maxCharacters;
  }

  abstract getJSON(): object
}

export { MessageObject, MessageConstructResult };
