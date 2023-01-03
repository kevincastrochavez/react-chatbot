class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello')) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
