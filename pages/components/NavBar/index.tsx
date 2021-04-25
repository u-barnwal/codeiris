import Container from 'pages/containers/Container';
import React from 'react';
import Button from '../atomic/button';
import { BellIcon } from '../Icons';
import NavItem from './NavItem';

function NavBar() {
  return (
    <div className="bg-white">
      <Container className="py-5">
        <div className="flex items-center">
          <NavItem link="">Posts</NavItem>
          <NavItem link="">Questions</NavItem>
          <NavItem link="">Jobs</NavItem>

          <div className="flex-1"></div>

          <BellIcon className="mr-5" />

          <Button className="rounded-full px-10">Login</Button>
        </div>
      </Container>
    </div>
  );
}

export default NavBar;
