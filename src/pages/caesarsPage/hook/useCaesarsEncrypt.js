import { useState } from 'react';

export const useCaesarsEncrypt = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [shift, setShift] = useState('');
  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onButtonEncryptCliked = () => {
    if (input === '') {
      return setShift('error: enter key value');
    }
    if (key === '0' || key === '') {
      return setShift('error: enter correct number');
    }
    if (Number.isNaN(+key)) {
      return setShift('error: enter the correct numeric value');
    }
    return setShift(input.split('').reduce((acc, item) => {
      // eslint-disable-next-line no-param-reassign
      acc = [...acc, item.charCodeAt(0)];
      return acc;
    }, []).map((x) => {
      return (x + parseInt(key));
    }).map((x) => {
      return String.fromCharCode(x);
    })
      .join(''));
  };

  const onButtonDecodeCliked = () => {
    if (input === '') {
      return setShift('error: enter key value');
    }
    if (key === '0' || key === '') {
      return setShift('error: enter correct number');
    }
    if (Number.isNaN(+key)) {
      return setShift('error: enter the correct numeric value');
    }
    return setShift(input.split('').reduce((acc, item) => {
      // eslint-disable-next-line no-param-reassign
      acc = [...acc, item.charCodeAt(0)];
      return acc;
    }, []).map((x) => {
      return (x - parseInt(key));
    }).map((x) => {
      return String.fromCharCode(x);
    })
      .join(''));
  };
  const handleChangeKey = (event) => {
    setKey(event.target.value);
  };

  return {
    input, setInput, handleChangeInput, onButtonEncryptCliked, shift, key, handleChangeKey, onButtonDecodeCliked
  };
};
