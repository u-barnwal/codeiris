import React from 'react';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Votes from './Votes';

function Post() {
  return (
    <div className="bg-white rounded-md p-4 flex">
      <Votes onUpVote={() => {}} onDownVote={() => {}}>
        0
      </Votes>

      <div>
        <PostHeader />
        <PostBody title="">&nbsp;</PostBody>
      </div>
    </div>
  );
}

export default Post;
