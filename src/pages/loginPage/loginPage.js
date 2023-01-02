import React from 'react';
import './loginPage.scss';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className="q-flex">
      <div className="login-form">
        <input type="text" placeholder="First Name" className="d-form" />
        <input type="text" placeholder="Last Name" className="d-form" />
        <input type="date" placeholder="Age" className="d-form" />
        <input type="email" placeholder="E-mail" className="d-form" />
        <input type="password" placeholder="Password" className="d-form" />
        <input type="password" placeholder="Repeat password" className="d-form" />
        <Link to="/register"><span className="display-8">Have an account? Log in</span></Link>
        <button type="submit" className="btn btn-primary"><span>Register</span></button>
      </div>
    </div>
  );
};
