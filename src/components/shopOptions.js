import React from 'react';
import { Link } from 'react-router-dom';

const ShopOptions = (props) => {
  const options = [
    {
      text: <a href='/inventory'>See inventory</a>,
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
