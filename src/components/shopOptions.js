import React from 'react';

const ShopOptions = (props) => {
  const options = [
    {
      text: 'See inventory',
      handler: () => {},
      id: 1,
    },
    { text: 'Find a dealer', handler: () => {}, id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className='option-button'>
      {option.text}
    </button>
  ));

  return <div className='options-container'>{buttonsMarkup}</div>;
};

export default ShopOptions;
