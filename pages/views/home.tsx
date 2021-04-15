import React, { useState } from 'react';
import DefaultLayout from '../layouts/defaultLayout';

function Home() {
  return <div className="mt-10 bg-primary">Hello ____ Coreiris!</div>;
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
