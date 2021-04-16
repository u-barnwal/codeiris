import React, { useState } from 'react';
// This is not to be imported form prisma client
// import { Post as PostData } from '.prisma/client';
import Post from '../Post';

export interface PostListProps {
  initialPosts?: any[];
}
const PostList: React.FC<PostListProps> = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState<any[]>(initialPosts);
  console.log(initialPosts);
  return (
    <div className="container">
      {posts.map((ele) => (
        <div className="my-10">
          <Post
            title={ele.title}
            body={ele.body}
            upvotes={ele._count.votes}
            user={ele.user}
            totalComments={ele._count.comments}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
