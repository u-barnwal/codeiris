import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import { NextPageContext } from 'next';
import Container from 'pages/containers/Container';
import FilterBar from 'pages/components/Home/FilterBar';
import SectionTitle from 'pages/components/Home/SectionTitle';
import { FireIcon, DiscussionIcon } from 'pages/components/Icons';
import PostList from 'pages/components/PostList';
import Filter from 'pages/components/Filter';

function Home({ data }) {
  return (
    <Container className="mt-10">
      <SectionTitle className="my-10" color="error" Icon={FireIcon}>
        Trending
      </SectionTitle>

      <FilterBar />

      <SectionTitle className="my-10" color="primary" Icon={DiscussionIcon}>
        Threads & Discussions
      </SectionTitle>

      <Filter />
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
      />
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
