import Container from 'pages/containers/Container';
import React from 'react';
import NavItem from './NavItem';

function NavBar() {
  return (
    <div className="bg-white">
      <Container className="py-5">
        <div className="flex">
          <NavItem link="">Posts</NavItem>
          <NavItem link="">Questions</NavItem>
          <NavItem link="">Jobs</NavItem>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
