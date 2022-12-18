import React from 'react';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';

export const SuspenseView = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  isLoading,
  // eslint-disable-next-line react/prop-types
  isError,
  // eslint-disable-next-line react/prop-types
  onTryAgainClick,
}) => {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <p>Error</p>
        {/* eslint-disable-next-line react/button-has-type */}
        <button type="button" onClick={onTryAgainClick}>Try Again!</button>
      </div>
    );
  }

  return (
    children
  );
};
