import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from 'utils';

import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { S_Nav, S_NavNavigation } from './styled';

export const Navbar = ({ className }) => {
  const location = useLocation();
  const isMinimal = useMemo(
    () => location.pathname !== routes.categories.path(),
    [location]
  );

  return (
    <S_Nav isMinimal={isMinimal} className={className}>
      <Logo className={isMinimal && 'md:my-auto'} />
      <S_NavNavigation isMinimal={isMinimal}>
        <Navigation />
      </S_NavNavigation>
    </S_Nav>
  );
};
