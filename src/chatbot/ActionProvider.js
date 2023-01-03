class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setStateFunc = setStateFunc;
  }
}

export default ActionProvider;
