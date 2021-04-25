import React from 'react';

function PostBody({ title, children }) {
  return (
    <div>
      <div className="text-2xl mb-3 font-semibold">{title}</div>
      <div className="line-clamp-3 overflow-hidden">{children}</div>
    </div>
  );
}

export default PostBody;
