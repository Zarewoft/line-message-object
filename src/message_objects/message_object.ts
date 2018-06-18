class MessageObject {
    /**
     *
     * @param {string} text
     * @param {number} maxCharacters
     * @returns {string}
     */
    protected limitText(text: string = "", maxCharacters: number) {
        if (text.length > maxCharacters) {
            return text.slice(0, maxCharacters);
        }
        return text;
    }
}

export { MessageObject }