import React from 'react';

interface Props {
  children: React.ReactNode,
}

export const Header: React.FC<Props> = ({ children }) => (
  <header>
    {children}
  </header>
);
