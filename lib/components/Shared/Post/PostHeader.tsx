import clsx from 'clsx';
import moment from 'moment';
import Avatar from 'lib/components/atomic/avatar/Avatar';
import React from 'react';
import { UserProps } from '../../../common/props/UserProps';

export interface PostHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  user?: UserProps;
  updatedAt?: any;
}

function PostHeader({ user, className, updatedAt }: PostHeaderProps) {
  return (
    <div className={clsx('flex items-center', className)}>
      {user.image ? (
        <img
          src={user.image}
          className="w-8 h-8 object-cover rounded-full"
          alt="User"
        />
      ) : (
        <Avatar size="small" label={user.firstName[0]} />
      )}

      <div className="ml-3 text-gray-500">
        Posted by{' '}
        <a href="#" className="text-primary">
          {user.firstName}
        </a>
      </div>

      <div className="flex-1"></div>

      <div className="text-gray-500 text-sm">{updatedAt}</div>
    </div>
  );
}

export default PostHeader;
