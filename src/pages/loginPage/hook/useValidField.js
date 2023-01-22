import { useState } from 'react';

export const useValidField = () => {
  const [isDisabledFirst, setIsDisabledFist] = useState(true);
  const [isDisabledLast, setIsDisabledLast] = useState(true);
  const [isValidNames, setIsValidNames] = useState(true);

  const [isValidForm, setIsValidForm] = useState('form-control');
  const [isInvalidFeedback, setIsInvalidFeedback] = useState('');
  
  const isValidString = (value) => {
    return /^[a-z0-9 ,.'-]+$/i.test(value);
  };

  const isValidFirst = (value) => {
    if (value && value.length >= 3 && value.length <= 16 && isValidString(value)) {
      setIsDisabledFist(false);
      setIsValidForm('form-control is-valid');
    } else {
      setIsDisabledFist(true);
      console.log('Не прошло валидацию');
      setIsValidForm('form-control is-invalid');
    }
  };

  const isValidLast = (value) => {
    if (value && value.length >= 3 && value.length <= 16 && isValidString(value)) {
      setIsDisabledLast(false);
      console.log('Прошло валидацию');
    } else {
      setIsDisabledLast(true);
      console.log('Не прошло валидацию');
    }
  };

  const isValid = () => {
    if (isDisabledFirst && isDisabledLast) {
      setIsValidNames(true);
    } else {
      setIsValidNames(false);
    }
  };

  const isInvalidClassName = (value) => {
    if (value.length === 0) {
      setIsInvalidFeedback('The name can not be empty');
    }
    if (value.length > 0 && value.length <= 2) {
      setIsInvalidFeedback('The name must contain at least 3 symbols');
    }
    if (isValidString(value) && value.length >= 3) {
      setIsInvalidFeedback('The name must contain only letters and numbers');
    }
    if (value.length >= 16) {
      setIsInvalidFeedback('The name can not be longer than 16 symbols');
    }
  };
  
  return {
    isValidFirst, isValidLast, isValid, isInvalidClassName, isValidNames, isValidForm, isInvalidFeedback
  };
};
