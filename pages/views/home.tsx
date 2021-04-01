import React from 'react';
import { NextPageContext } from 'next';

function Home({ data }) {
  return <div className="mt-10 bg-primary">Hello ____ {data.data}!</div>;
}

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      data: ctx.query,
    },
  };
}

export default Home;
