import DefaultLayout from 'pages/layouts/defaultLayout';
import React from 'react';

function SavePost() {
  return (
    <div className="container px-40 mt-10">
      <div className="text-2xl mb-8">Create Post</div>

      <div className="flex">
        <div className="flex-grow"></div>

        <div style={{ minWidth: '200px' }}>
          {['Post', 'Job', 'Question'].map((p, index) => (
            <div
              key={index}
              className="py-2 px-4 rounded-md bg-white mb-3 cursor-pointer hover:bg-secondary-dark transition-all"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

SavePost.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default SavePost;
