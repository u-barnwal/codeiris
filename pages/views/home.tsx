import React, { useState } from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import PostList from '../components/PostList';
import { NextPageContext } from 'next';

function Home({ data }) {
  return (
    <div className="mt-10 ">
      <PostList
        initialPosts={JSON.parse(data.initialPosts).map((ele) => ({
          ...ele,
          id: ele.id,
          body: ele.body,
          title: ele.title,
          user: ele.user,
          upvotes: ele._count.upvote,
          totalComments: ele._count.comment,
        }))}
      />
    </div>
  );
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      data: ctx.query,
    },
  };
}
export default Home;
