abstract class MessageObject implements Message {
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

    abstract getJSON(): object
}

interface Message {
    getJSON(): object
}

export { MessageObject };
