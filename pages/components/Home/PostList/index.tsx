import clsx from 'clsx';
import React from 'react';
import Post from './../../Shared/Post';

function PostList({ className = '' }) {
  return (
    // TODO: update the hardcoded margin
    <div className={clsx('mr-60', className)}>
      <Post />
    </div>
  );
}

export default PostList;
