import { useState } from 'react';

export const useValidField = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const [isErrorLastName, setIsErrorLastName] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const isValidString = (value) => {
    return /^[a-z,.'-]+$/i.test(value);
  };

  const isValidNameFirstName = (value) => {
    if (value && value.length >= 3 && value.length <= 16 && isValidString(value)) {
      return false;
    }
    return true;
  };

  const onValidateName = (value) => {
    if (value.length === 0) {
      return 'The name can not be empty';
    }
    if (value.length > 0 && value.length <= 2) {
      return 'The name must contain at least 3 symbols';
    }
    if (isValidString(value) && value.length >= 3) {
      return 'The name must contain only letters and numbers';
    }
    if (value.length >= 16) {
      return 'The name can not be longer than 16 symbols';
    }
    return '';
  };

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value.trim());
    setFirstNameError(onValidateName(event.target.value));
    setIsErrorFirstName(isValidNameFirstName(event.target.value));
  };
  const onChangeLastName = (event) => {
    setLastName(event.target.value.trim());
    setLastNameError(onValidateName(event.target.value));
    setIsErrorLastName(isValidNameFirstName(event.target.value));
  };

  // TODO Password validation

  return {
    firstNameError,
    lastNameError,
    isErrorFirstName,
    isErrorLastName,
    firstName,
    lastName,
    onChangeFirstName,
    onChangeLastName
  };
};
