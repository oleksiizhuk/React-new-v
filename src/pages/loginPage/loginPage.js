import React, { useState } from 'react';
import './loginPage.scss';
import { Link } from 'react-router-dom';

const isValidString = (value) => {
  return /^[a-z0-9 ,.'-]+$/i.test(value);
};

export const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isDisabledFirst, setIsDisabledFist] = useState(true);
  const [isDisabledLast, setIsDisabledLast] = useState(true);
  const [isValidNames, setIsValidNames] = useState(true);

  const [isValidForm, setIsValidForm] = useState('form-control');
  const [isInvalidFeedback, setIsInvalidFeedback] = useState('');

  console.log('TECT PErYL');
  
  // NAME VALIDATION  
  
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

  // CLASS NAME VALID
  const isInvalidClassName = (value) => {
    if (value.length === 0) {
      setIsInvalidFeedback('The name can not be empty');
      console.log('EMPTY NAME');
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

  // console.log('first=', firstName,
  // 'last=', lastName, 'date=',
  // birthDate, 'mail=', mail,
  // 'password=', password,
  // 'confirm=', passwordConfirm);
  // console.log('RENDER');

  return (
    <div className="q-flex">
      <div className="login-form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className={isValidForm}
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value.trim());
            isValidFirst(e.target.value);
            isValid(e.target.value);
            isInvalidClassName(e.target.value);
          }}
        />
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="invalid-feedback">
          {isInvalidFeedback}
        </div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          className="d-form"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value.trim());
            isValidLast(e.target.value);
            isValid(e.target.value);
          }}
        />
        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="date"
          id="birthDate"
          className="d-form"
          onChange={(e) => setBirthDate(e.target.value)}
          value={birthDate}
        />
        <label htmlFor="mail">EMail</label>
        <input
          type="email"
          id="mail"
          placeholder="E-mail"
          className="d-form"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="d-form"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <input
          type="password"
          id="passwordConfirm"
          placeholder="Repeat password"
          className="d-form"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <Link to="/register"><span className="display-8">Have an account? Log in</span></Link>
        <button type="submit" className="btn btn-primary" disabled={isValidNames}><span>Register</span></button>
      </div>
    </div>
  );
};
