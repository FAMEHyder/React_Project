import React from 'react';
import Thor from './Thor'; // Import CompB

const Odin = () => {
  const someData = " I m Odin";
  const anotherData = 7;

  return (
    <div>
      <h1>I m Odin</h1>
      <Thor message={someData} number={anotherData} />
    </div>
  );
};

export default Odin;
