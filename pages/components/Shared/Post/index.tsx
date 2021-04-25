import React from 'react';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Votes from './Votes';

function Post() {
  return (
    <div className="bg-white rounded-md p-4 flex">
      <Votes />

      <div>
        <PostHeader />
        <PostBody title="">d</PostBody>
      </div>
    </div>
  );
}

export default Post;
