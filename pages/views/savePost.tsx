import { Intent, Position } from 'lib/common';
import Toaster from 'pages/components/atomic/toast/Toaster';
import DefaultLayout from 'pages/layouts/defaultLayout';
import React from 'react';
import {
  AddPostDocument,
  AddPostMutation,
  AddPostMutationVariables,
} from 'gql';
import { useMutation } from '@apollo/client';
import FormSaveLinkPost from './savePost/FormSaveLinkPost';

const AppToaster = Toaster.create({ position: Position.BOTTOM });

const initialFields = {
  imageURL: '',
  title: '',
  url: '',
};

function SavePost() {
  const [AddPost, { ...addPostData }] = useMutation<
    AddPostMutation,
    AddPostMutationVariables
  >(AddPostDocument);

  const handleOnSave = (data, onSuccess = () => {}) => {
    // + inserting row
    AddPost({
      variables: {
        ...initialFields,
        ...data,
      },
    })
      .then((value) => {
        AppToaster.show({
          message: 'Post Published Successfully!',
          intent: Intent.SUCCESS,
        });

        onSuccess();
      })
      .catch((error) => handleOnError(error.message));
  };

  const handleOnError = (message) => {
    AppToaster.show({
      message,
      intent: Intent.WARNING,
    });
  };

  return (
    <div className="container px-40 mt-10">
      <div className="text-2xl mb-8">Create Post</div>

      <div className="flex">
        <div className="flex-grow p-3 bg-white mr-5 rounded-md">
          <FormSaveLinkPost
            loading={addPostData.loading}
            processError={handleOnError}
            processSave={handleOnSave}
          />
        </div>

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
