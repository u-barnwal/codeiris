import React, { useState } from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import PostList from '../components/PostList';
import { NextPageContext } from 'next';

function Home({ data }) {
  return (
    <div className="mt-10 bg-secondary-light ">
      <PostList initialPosts={JSON.parse(data.initialPosts)} />
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
