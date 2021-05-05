import React from 'react';

type NavItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

function NavItem({ children, ...rest }: NavItemProps) {
  return (
    <div className="mr-10 text-dark-light hover:text-dark transition-all cursor-pointer font-semibold border-b-2 border-white hover:border-dark-dark">
      <a {...rest}>{children}</a>
    </div>
  );
}

export default NavItem;
