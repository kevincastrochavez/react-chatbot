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

    if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
      this.actionProvider.handleJavascriptQuiz();
    }
  }
}

export default MessageParser;
