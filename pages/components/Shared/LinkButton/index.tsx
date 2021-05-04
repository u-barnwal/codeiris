import Router from 'next/router';
import Button, { ButtonProps } from 'pages/components/atomic/button/Button';
import React from 'react';

export interface LinkButtonProps extends ButtonProps {
  link?: string;
}

function LinkButton({ link = '', ...rest }: LinkButtonProps) {
  const handleClick = () => Router.push(link);
  return <Button {...rest} onClick={handleClick} />;
}

export default LinkButton;
