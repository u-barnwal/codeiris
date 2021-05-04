import Dropdown from 'lib/components/atomic/dropdown/Dropdown';
import { BellIcon } from 'lib/components/Icons';
import React from 'react';

function Notification({ className }) {
  return (
    <Dropdown menu={[]} className={className}>
      <BellIcon />
    </Dropdown>
  );
}

export default Notification;
