import React from 'react';
import classnames from 'classnames';

import './style.css';

export const Loading = ({ className }) => (
  <img
    alt="Loading..."
    src="/svg/loading.svg"
    className={classnames(
      'react-loading w-16 h-16 pointer-events-none',
      className
    )}
  />
);
