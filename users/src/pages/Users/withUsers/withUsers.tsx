import React from 'react';

import { IWithUsers } from '../types';

const withUsers = (WrappedComponent: React.ElementType) => {
  const WithUsersHOC = (props: IWithUsers) => {
    return <WrappedComponent {...props} />;
  };

  return WithUsersHOC;
};

export { withUsers };
