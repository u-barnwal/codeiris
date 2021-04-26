import clsx from 'clsx';
import React from 'react';

function PostHeader({ user, className = '' }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <img
        src={user.image}
        className="w-8 h-8 object-cover rounded-full"
        alt="User"
      />

      <div className="ml-3 text-gray-500">
        Posted by{' '}
        <a href="#" className="text-primary">
          {user.name}
        </a>
      </div>

      <div className="flex-1"></div>

      <div className="text-gray-500 text-sm">3 Hours ago</div>
    </div>
  );
}

export default PostHeader;
