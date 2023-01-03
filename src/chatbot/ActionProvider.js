class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setStateFunc = setStateFunc;
  }

  greet = () => {
    const message = this.createChatbotMessage('Hello Friend');
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatbotMessage('Fantastic! Here is your quiz', {
      widget: 'javascriptQuiz',
    });

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setStateFunc((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
