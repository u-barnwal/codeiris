import React from 'react';
import Tag from '../Tag';

const MAX_VISIBLE_TAGS = 5;

function PostBody({ title, children, tags = [] }) {
  return (
    <>
      <div className="text-2xl mb-3 font-semibold">{title}</div>

      <div className="line-clamp-3 mb-3 overflow-hidden">{children}</div>

      {tags.slice(-1 * MAX_VISIBLE_TAGS).map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </>
  );
}

export default PostBody;
