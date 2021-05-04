import React from 'react';

const MAX_VISIBLE_TAGS = 5;

function Tag({ children }) {
  return (
    <div className="inline-block mr-3 border rounded-md py-1 px-4 text-xs text-gray-500">
      {children}
    </div>
  );
}

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
