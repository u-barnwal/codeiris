import React from 'react';

function NavItem({ link, children }) {
  return (
    <div className="mr-10 text-dark-light hover:text-dark transition-all cursor-pointer font-semibold border-b-2 border-white hover:border-dark-dark">
      <a href="#">{children}</a>
    </div>
  );
}

export default NavItem;
