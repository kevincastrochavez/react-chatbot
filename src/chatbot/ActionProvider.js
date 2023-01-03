class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setStateFunc = setStateFunc;
  }

  greet = () => {
    const message = this.createChatbotMessage('Hello Friend');
    this.addMessageToState(message);
  };

  shopVehicle = () => {
    const message = this.createChatbotMessage(
      'We assure you there is no place like Carstro to get your next vehicle. What would you like to do?',
      {
        widget: 'shopOptions',
      }
    );

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
