import React from 'react';

interface Props {
  children: React.ReactNode,
}

export const Main: React.FC<Props> = ({ children }) => (
  <main>
    {children}
  </main>
);
