import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from 'lib/components/NavBar';

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  );
}

export default DefaultLayout;
