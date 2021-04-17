import DefaultLayout from '../layouts/defaultLayout';
import React from 'react';

function Account() {
  return <div></div>;
}

Account.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Account;
