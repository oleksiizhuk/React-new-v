import React, { useState } from 'react';
import './loginPage.scss';
import { Link } from 'react-router-dom';
import { useValidField } from './hook/useValidField';
import { Input } from '../../component/Input/Input';

export const LoginPage = () => {
  const [birthDate, setBirthDate] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const {
    firstNameError,
    lastNameError,
    isErrorFirstName,
    isErrorLastName,
    firstName,
    lastName,
    onChangeFirstName,
    onChangeLastName
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
        <Input
          type="password"
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
        <button type="submit" className="btn btn-primary"><span>Register</span></button>
      </div>
    </div>
  );
};
