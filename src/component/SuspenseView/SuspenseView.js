import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import styles from './styles.module.scss';
import './suspenseView.scss';
import image from './sad.png';

export const SuspenseView = ({
  children,
  isLoading,
  isError,
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
      <div className="error-div">
        <div className="z-flex">
          <img src={image} alt="sad dog" />
          <p className="display-1 error-text">Error!</p>
        </div>
        <p className="display-12">How about?</p>
        <button type="button" className="btn btn-secondary" onClick={onTryAgainClick}>Try Again!</button>
      </div>
    );
  }

  return (
    children
  );
};

SuspenseView.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
  onTryAgainClick: PropTypes.func,
};

SuspenseView.defaultProps = {
  onTryAgainClick: undefined,
  isError: undefined,
};
