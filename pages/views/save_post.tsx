import { Intent, Position } from 'lib/common';
import Button from 'pages/components/atomic/button';
import TextField from 'pages/components/atomic/textField';
import Toaster from 'pages/components/atomic/toast/Toaster';
import useForm from 'pages/hooks/useForm';
import DefaultLayout from 'pages/layouts/defaultLayout';
import React from 'react';
import {
  AddPostDocument,
  AddPostMutation,
  AddPostMutationVariables,
} from 'gql';
import { useMutation } from '@apollo/client';
import { PostType } from '.prisma/client';

const AppToaster = Toaster.create({ position: Position.BOTTOM });

const initialFields = {
  imageURL: '',
  title: '',
  url: '',
};

function SavePost() {
  const {
    props: { imageURL, title, url },
    dispatch,
    handleFieldChange,
  } = useForm(initialFields);

  const [AddPost, { ...addPostData }] = useMutation<
    AddPostMutation,
    AddPostMutationVariables
  >(AddPostDocument);

  const handleSubmit = () => {
    let error;

    if (title === '') error = 'You must enter a title!';
    else if (url === '') error = 'You must enter a URL!';

    if (error) {
      AppToaster.show({
        message: error,
        intent: Intent.ERROR,
      });
      return;
    }

    // + inserting row
    AddPost({
      variables: {
        title,
        url,
        // type: PostType.link,
      },
    })
      .then((value) => {
        AppToaster.show({
          message: 'Post Added!',
          intent: Intent.SUCCESS,
        });

        reset();
      })
      .catch((error) =>
        AppToaster.show({
          message: error.message,
          intent: Intent.ERROR,
        }),
      );
  };

  const reset = () => {
    dispatch(initialFields);
  };

  return (
    <div className="container px-40 mt-10">
      <div className="text-2xl mb-8">Create Post</div>

      <div className="flex">
        <div className="flex-grow p-3 bg-white mr-5 rounded-md">
          <div className="flex items-end w-full">
            {imageURL && (
              <img src={imageURL} alt="he" style={{ maxHeight: '100px' }} />
            )}

            <TextField
              placeholder="Paste image URL here..."
              className="flex-grow"
              onChange={(e) => {
                handleFieldChange('imageURL', e);
              }}
            />
          </div>

          <TextField
            value={title}
            placeholder="Title"
            onChange={(e) => handleFieldChange('title', e)}
          />

          <TextField
            value={url}
            placeholder="URL"
            type="url"
            onChange={(e) => handleFieldChange('url', e)}
          />

          <Button onClick={handleSubmit}>Add</Button>
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
