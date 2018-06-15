const { TextMessage } = require('./text_message')
const assert = require('assert');

describe('TextMessage', () => {
  it('should construct with 2000 text characters', () => {
    let text = '';
    for (let i = 0; i < 2001; i++) {
      text += 'a';
    }
    let textMessage = new TextMessage(text);
    assert.equal(textMessage.text.length, 2000);
  });
});
