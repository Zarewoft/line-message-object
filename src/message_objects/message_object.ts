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

  static validateURL(url: string): Error {
    if (!url) {
      return new Error("url is missing");
    } else if (!url.startsWith("https://", 0)) {
      return new Error("url is required https protocol");
    } else if (url.length > 1000) {
      return new Error("url lenght is 1000 character max");
    }
    return null;
  }

  abstract getJSON(): object
}

export { MessageObject, MessageConstructResult };
