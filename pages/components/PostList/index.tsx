import React, { useState } from 'react';
// This is not to be imported form prisma client
// import { Post as PostData } from '.prisma/client';
import Post from '../Post';

export interface PostListProps {
  initialPosts?: any[];
}
const PostList: React.FC<PostListProps> = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState<any[]>(initialPosts);
  return (
    <div className="flex flex-col    ">
      {posts.map((ele) => (
        <div className="my-5">
          <Post title={ele.title} body={ele.body} upvotes={0} user={ele.user} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
