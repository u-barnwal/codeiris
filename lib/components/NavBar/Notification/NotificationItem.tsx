import React from 'react';

function NotificationItem({ title, text }) {
  return (
    <div className="px-3 py-1">
      <div className="text-sm mb-1">{title}</div>
      <div className="text-xs text-gray-600">{text}</div>
    </div>
  );
}

export default NotificationItem;
