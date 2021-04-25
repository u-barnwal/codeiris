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

      <div className="flex-1">
        <PostHeader
          user={{
            image:
              'https://i.pinimg.com/originals/10/18/55/101855f519ea89fc7e9a965a346a196f.jpg',
            name: 'Sheldon Cooper',
          }}
          className="ml-10"
        />

        <PostBody title="">&nbsp;</PostBody>
      </div>
    </div>
  );
}

export default Post;
