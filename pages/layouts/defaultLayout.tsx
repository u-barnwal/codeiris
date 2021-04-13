import React from 'react';
import Header from '../components/Header';

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}

export default DefaultLayout;
