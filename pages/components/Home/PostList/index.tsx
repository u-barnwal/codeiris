import clsx from 'clsx';
import React from 'react';
import Post from './../../Shared/Post';

export type PostListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function PostList({ className }: PostListProps) {
  return (
    // TODO: update the hardcoded margin
    <div className={clsx('mr-60', className)}>
      <Post />
    </div>
  );
}

export default PostList;
