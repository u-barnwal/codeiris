import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import { NextPageContext } from 'next';
import Container from 'pages/containers/Container';
import FilterBar from 'pages/components/Home/FilterBar';

function Home({ data }) {
  return (
    <Container className="mt-10">
      <FilterBar className="my-10" />
      {/* <Filter />
      <PostList
        initialPosts={JSON.parse(data.initialPosts).map((ele) => ({
          ...ele,
          id: ele.id,
          body: ele.body,
          title: ele.title,
          user: ele.user,
          upvotes: ele._count.votes,
          totalComments: ele._count.comments,
        }))}
      /> */}
    </Container>
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
