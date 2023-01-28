import { thirteenAgeInMS } from '../constants/constants';

export const isValidEMail = (value) => {
  // eslint-disable-next-line
  return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value));
};

export const isValidPassword = (value) => {
  return !(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value));
};

export const isValidString = (value) => {
  return /^[a-z,.'-]+$/i.test(value);
};

export const isValidBirthday = (age) => {
  const now = new Date().getTime();
  const birth = new Date(age).getTime();
  const diff = now - birth;
  return !(diff >= thirteenAgeInMS);
};
