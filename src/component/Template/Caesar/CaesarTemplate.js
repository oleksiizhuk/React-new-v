import React, { useState } from 'react';
import './caesar.scss';

// eslint-disable-next-line react/prop-types
export const CaesarTemplate = ({
  // eslint-disable-next-line react/prop-types
  input, handleChangeInput, onButtonEncryptCliked, shift, handleChangeKey, key, onButtonDecodeCliked
}) => {
  console.log(input);

  return (
    <div className="caesars-div">
      <p>Enter text</p>
      <input
        type="text"
        value={input}
        onChange={handleChangeInput}
      />

      <p>Operation</p>
      <div className="btn-area">
        <button type="button" onClick={onButtonEncryptCliked}> Encrypt</button>
        <button type="button" onClick={onButtonDecodeCliked}> Decode</button>
      </div>
      <p>Choose increment</p>
      <input type="text" value={key} onChange={handleChangeKey} />
      <p id="output">{shift}</p>
    </div>
  );
};
