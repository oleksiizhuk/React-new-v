import { useState } from 'react';

export const useValidField = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const [isErrorLastName, setIsErrorLastName] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isValidPass, setIsValidPass] = useState(false);
  const [isValidConfirmPass, setIsValidConfirmPass] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const [mail, setMail] = useState('');
  const [isValidMail, setIsValidMail] = useState(false);
  const [mailError, setMailError] = useState('');

  const [birthDate, setBirthDate] = useState('');
  const [isAdult, setIsAdult] = useState(false);
  const [dateError, setDateError] = useState('');

  const onAdult = (age) => {
    const now = new Date().getTime();
    const birth = new Date(age).getTime();
    const diff = now - birth;
    return !(diff >= 409968000000);
  };

  const onDateError = (value) => {
    return onAdult(value) ? 'You must be at least 13 years to continue' : '';
  };

  const onChangeBirthDate = (event) => {
    setBirthDate(event.target.value);
    setIsAdult(onAdult(event.target.value));
    setDateError(onDateError(event.target.value));
  };

  const onValidEMail = (value) => {
    return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value));
  };
  
  const mailErrorMessage = (value) => {
    if (onValidEMail(value)) {
      return 'Enter proper email';
    }
    return '';
  };

  const onChangeMail = (event) => {
    setMail(event.target.value);
    setIsValidMail(onValidEMail(event.target.value));
    setMailError(mailErrorMessage(event.target.value));
  };

  const isValidPassword = (value) => {
    return !(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value));
  };

  const onCheckPassword = (value) => {
    if (value !== password) {
      console.log(value, password);
      setIsValidConfirmPass(true);
    } else {
      console.log('COBnaLO');
      setIsValidConfirmPass(false); 
    }
  };

  const onValidatePassword = (value) => {
    if (value.length === 0) {
      return 'Password can not be empty';
    }
    if (value.length < 8) {
      return 'Password must contain at least 8 numbers';
    }
    if (isValidPassword(value)) {
      return 'Minimum eight characters, at least one letter, one number and one special character';
    }
    if (value !== password) {
      return 'Passwords does not match';
    }
    return '';
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setIsValidPass(isValidPassword(event.target.value));
    setPasswordError(onValidatePassword(event.target.value));
  };

  const onChangeConfirmPassword = (event) => {
    setPasswordConfirm(event.target.value);
    setIsValidConfirmPass(isValidPassword(event.target.value));
    setPasswordConfirmError(onValidatePassword(event.target.value));
    onCheckPassword(event.target.value);
  };

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

  const onButtonCheck = () => {
    if (!isErrorFirstName && firstName 
      && !isErrorLastName && lastName 
      && !isValidPass && password 
      && !isValidConfirmPass && passwordConfirm 
      && !isValidMail && mail 
      && !isAdult && birthDate) {
      return true;
    } 
    return false;
  };
  const buttonIsDisabled = onButtonCheck();

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

  return {
    firstNameError,
    lastNameError,
    isErrorFirstName,
    isErrorLastName,
    firstName,
    lastName,
    onChangeFirstName,
    onChangeLastName,
    isValidPass,
    isValidConfirmPass,
    password,
    passwordConfirm,
    passwordError,
    passwordConfirmError,
    onChangePassword,
    onChangeConfirmPassword,
    mail,
    isValidMail,
    mailError,
    onChangeMail,
    birthDate,
    onChangeBirthDate,
    isAdult,
    dateError,
    buttonIsDisabled
  };
};
