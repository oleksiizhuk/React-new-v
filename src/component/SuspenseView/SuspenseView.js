import React from 'react';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';

export const SuspenseView = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  isLoading
}) => {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    children
  );
};
