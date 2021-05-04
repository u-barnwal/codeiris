import { useQuery } from '@apollo/client';
import clsx from 'clsx';
import e from 'express';
import { GetPostsDocument, GetPostsQuery, QueryGetPostsArgs } from 'gql';
import { skipper } from 'lib/accessToken';
import { PostProps } from 'lib/common/props/PostProps';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
// This is not to be imported form prisma client
// import { Post as PostData } from '.prisma/client';
import Post from '../Shared/Post';

export interface PostListProps {
  initialPosts?: PostProps[];
  className?: string;
}
const PostList: React.FC<PostListProps> = ({
  initialPosts = [],
  className,
}) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [cursor, setCursor] = useState('');
  const { loading, data, error } = useQuery<GetPostsQuery, QueryGetPostsArgs>(
    GetPostsDocument,
    {
      variables: {
        after: cursor,
        first: 10,
      },
      skip: skipper(),
    },
  );
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight > scrollHeight - 20) {
        console.log('Adding to page');
        setTimeout(
          () => setCursor(posts.length > 0 ? posts[posts.length - 1].id : ''),
          1000,
        );
      }
    });
  }, []);
  useEffect(() => {
    if (!loading) {
      if (!!data) {
        const length = data.getPosts.edges.length;
        if (length < 1) return;
        setCursor(data.getPosts.edges[length - 1].node.id);
        const newPosts = data.getPosts.edges.map((ele) => ({
          id: ele.node.id,
          title: ele.node.title,
          body: ele.node.body,
          user: ele.node.user,
          upvoteState: ele.node.upvoteState as
            | 'upvotes'
            | 'downvotes'
            | 'notvoted'
            | 'disabled',
          upvotes: ele.node.totalVotes,
          totalComments: ele.node.totalComments,
        }));
        console.log('New List ', newPosts);
        setPosts((prev) => [...prev, ...newPosts]);
      }
      if (!!error) {
        console.log(error);
      }
    }
  }, [loading, data, error]);
  return (
    <div className="container">
      {posts.map((ele) => (
        <div className={clsx('mr-60', className)}>
          <Post
            id={ele.id}
            title={ele.title}
            body={ele.body}
            upvotes={ele.upvotes}
            upvoteState={ele.upvoteState}
            user={ele.user}
            totalComments={ele.totalComments}
            updatedAt={moment(ele.updatedAt).fromNow()}
            tags={ele.tags ? ele.tags : []}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
