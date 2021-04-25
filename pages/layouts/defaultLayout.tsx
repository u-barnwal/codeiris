import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from 'pages/components/NavBar';
const Header = dynamic(import('../components/Header'), { ssr: false });

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Header />
      {children} */}
    </React.Fragment>
  );
}

export default DefaultLayout;
