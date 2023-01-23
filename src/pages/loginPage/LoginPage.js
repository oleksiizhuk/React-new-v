import React, { useState } from 'react';
import './loginPage.scss';
import { Link } from 'react-router-dom';
import { useValidField } from './hook/useValidField';
import { Input } from '../../component/Input/Input';

export const LoginPage = () => {
  const [birthDate, setBirthDate] = useState('');

  const {
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
  } = useValidField();

  return (
    <div className="q-flex">
      <div className="login-form">
        <Input
          onChange={onChangeFirstName}
          value={firstName}
          placeholder="First Name"
          name="firstName"
          label="First Name"
          isError={isErrorFirstName}
          error={firstNameError}
        />
        <Input
          onChange={onChangeLastName}
          value={lastName}
          placeholder="Last Name"
          name="lastName"
          label="Last Name"
          isError={isErrorLastName}
          error={lastNameError}
        />
        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="date"
          id="birthDate"
          className="d-form"
          onChange={(e) => setBirthDate(e.target.value)}
          value={birthDate}
        />
        <Input
          type="email"
          onChange={onChangeMail}
          placeholder="Email"
          label="Email"
          value={mail}
          isError={isValidMail}
          error={mailError}
        />

        <Input
          type="password"
          onChange={onChangePassword}
          value={password}
          placeholder="Password"
          name="password"
          label="Password"
          isError={isValidPass}
          error={passwordError}
        />
        <Input
          type="password"
          onChange={onChangeConfirmPassword}
          value={passwordConfirm}
          placeholder="Confirm password"
          name="passwordConfirm"
          label="Confirm password"
          isError={isValidConfirmPass}
          error={passwordConfirmError}
        />
        <Link to="/register"><span className="display-8">Have an account? Log in</span></Link>
        <button type="submit" className="btn btn-primary"><span>Register</span></button>
      </div>
    </div>
  );
};
