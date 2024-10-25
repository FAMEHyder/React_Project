import React from 'react';
import Rocket from './Rocket';

const Thor = ({ message, number }) => {
  return (
    <div>
      <h2>I m Thor</h2>
      <p>Message from Odin: {message}</p>
      <p>Number from Odin: {number}</p>
      <Rocket message={message} number={number}/>
    </div>
  );
};

export default Thor;