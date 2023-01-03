import { createChatBotMessage } from 'react-chatbot-kit';

import Options from '../components/Options/Options';
import Quiz from '../components/Quiz/Quiz.js';
import ShopOptions from '../components/shopOptions';

const config = {
  botName: "CARSTRO's Digital Assistant",
  initialMessages: [
    createChatBotMessage('Welcome to Carstro chat! How can we help you', {
      widget: 'options',
    }),
  ],
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: 'shopOptions',
      widgetFunc: (props) => <ShopOptions {...props} />,
    },
  ],
};

export default config;
