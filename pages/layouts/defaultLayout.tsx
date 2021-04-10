import React from 'react';

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return <React.Fragment>{children}</React.Fragment>;
}

export default DefaultLayout;
