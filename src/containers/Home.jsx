import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Loading } from 'components';
import { routes } from 'utils';

const HomeContainer = () => {
  const history = useHistory();

  useEffect(() => {
    history.replace(routes.categories.path());
  }, [history]);

  return <Loading />;
};

export default HomeContainer;
