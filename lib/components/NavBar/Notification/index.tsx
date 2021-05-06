import Dropdown from 'lib/components/atomic/dropdown/Dropdown';
import { BellIcon } from 'lib/components/Icons';
import React from 'react';
import NotificationItem from './NotificationItem';

function Notification({ className, notifications = [] }) {
  return (
    <Dropdown
      menu={notifications.map(({ title, text }, index) => (
        <NotificationItem title={title} text={text} key={index} />
      ))}
      className={className}
    >
      <BellIcon />
    </Dropdown>
  );
}

export default Notification;
