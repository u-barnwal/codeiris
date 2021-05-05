import React from 'react';
import Link from 'next/link';
function NavItem({ link, children }) {
  return (
    <div className="mr-10 text-dark-light hover:text-dark transition-all cursor-pointer font-semibold border-b-2 border-white hover:border-dark-dark">
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </div>
  );
}

export default NavItem;
