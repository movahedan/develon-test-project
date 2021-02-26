import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { routes } from 'utils';

import { S_Logo, S_Logo_Wrapper, S_WebsiteTitle } from './styled';

export const Logo = ({ className }) => {
  const location = useLocation();
  const isMinimal = useMemo(
    () => location.pathname !== routes.categories.path(),
    [location]
  );

  return (
    <S_Logo_Wrapper className={className}>
      <Link
        to={routes.categories.path()}
        className={classnames(
          'flex-none flex items-center transition-all duration-150',
          !isMinimal && 'my-auto'
        )}
      >
        <S_Logo isMinimal={isMinimal} />
        <S_WebsiteTitle isMinimal={isMinimal}>Develon</S_WebsiteTitle>
      </Link>
    </S_Logo_Wrapper>
  );
};
