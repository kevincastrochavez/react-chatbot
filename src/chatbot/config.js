import { createChatBotMessage } from 'react-chatbot-kit';

import Options from '../components/Options/Options';

const config = {
  botName: 'Learning bot',
  initialMessages: [
    createChatBotMessage('Hello, what do you want to learn', {
      widget: 'options',
    }),
  ],
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
