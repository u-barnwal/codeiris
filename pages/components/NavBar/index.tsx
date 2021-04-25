import Container from 'pages/containers/Container';
import React from 'react';
import NavItem from './NavItem';

function NavBar() {
  return (
    <div>
      <Container className="py-5">
        <div className="flex">
          <NavItem link="">Post</NavItem>
          <NavItem link="">Question</NavItem>
          <NavItem link="">Job</NavItem>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
