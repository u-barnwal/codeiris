import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';
import { NextPageContext } from 'next';
import Container from 'pages/components/atomic/containers/Container';
import FilterBar from 'pages/components/Home/FilterBar';
import SectionTitle from 'pages/components/Home/SectionTitle';
import { FireIcon, DiscussionIcon } from 'pages/components/Icons';
import PostList from 'pages/components/Home/PostList';

function Home({ data }) {
  return (
    <Container className="mt-10">
      <SectionTitle
        className="my-10"
        color="error"
        icon={<FireIcon color="white" size={4} />}
      >
        Trending
      </SectionTitle>

      <FilterBar />

      <SectionTitle
        className="my-10"
        color="primary"
        icon={<DiscussionIcon color="white" size={4} />}
      >
        Threads & Discussions
      </SectionTitle>

      <PostList className="shadow-lg rounded-lg" />
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
