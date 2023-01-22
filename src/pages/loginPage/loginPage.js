import React, { useState } from 'react';
import './loginPage.scss';
import { Link } from 'react-router-dom';
import { useValidField } from './hook/useValidField';
import { Input } from '../../component/Input/Input';

export const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const {
    isValidFirst,
    isValidLast,
    isValid,
    isInvalidClassName,
    isValidNames,
    isValidForm,
    isInvalidFeedback
  } = useValidField();

  return (
    <div className="q-flex">
      <div className="login-form">
        <Input
          onChange={(e) => {
            setFirstName(e.target.value.trim());
            isValidFirst(e.target.value);
            isValid(e.target.value);
            isInvalidClassName(e.target.value);
          }}
          value={firstName}
          placeholder="First Name"
          name="firstName"
          label="First Name"
          isError={isValidNames}
          error={isInvalidFeedback}
        />

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
        <div className="valid-feedback">
          Looks good!
        </div>
        <div className="invalid-feedback">
          {}
        </div>
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
