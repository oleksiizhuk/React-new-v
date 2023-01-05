import React from 'react';
import { CaesarTemplate } from '../../component/Template/Caesar/CaesarTemplate';
import { useCaesarsEncrypt } from './hook/useCaesarsEncrypt';

export const CaesarsPage = () => {
  const {
    input, setInput, handleChangeInput, onButtonEncryptCliked, shift, handleChangeKey, onButtonDecodeCliked
  } = useCaesarsEncrypt();
  // eslint-disable-next-line max-len
  return (
    <CaesarTemplate
      input={input} 
      setInput={setInput} 
      handleChangeInput={handleChangeInput} 
      onButtonEncryptCliked={onButtonEncryptCliked} 
      shift={shift} 
      handleChangeKey={handleChangeKey}
      onButtonDecodeCliked={onButtonDecodeCliked}
    />
  );
};
