import clsx from 'clsx';
import React from 'react';
import Post from './../../Shared/Post';

function PostList({ className = '' }) {
  return (
    <div className={clsx('flex items-center', className)}>
      <Post />
    </div>
  );
}

export default PostList;
