import { Intent, Position } from 'lib/common';
import Toaster from 'pages/components/atomic/toast/Toaster';
import DefaultLayout from 'pages/layouts/defaultLayout';
import React, { useState } from 'react';
import {
  AddPostDocument,
  AddPostMutation,
  AddPostMutationVariables,
  PostType,
} from 'gql';
import { useMutation } from '@apollo/client';
import FormSaveLinkPost from '../components/SavePost/FormSaveLinkPost';
import FormSaveJobPost from '../components/SavePost/FormSaveJobPost';
import FormSaveAskPost from '../components/SavePost/FormSaveAskPost';
import clsx from 'clsx';
import Animation from 'pages/components/Shared/Animation';
import animationLink from './../static/animations/link.json';
import animationJob from './../static/animations/job.json';
import animationAsk from './../static/animations/ask.json';

const AppToaster = Toaster.create({ position: Position.BOTTOM });

const initialFields = {
  imageURL: '',
  title: '',
  url: '',
  body: '',
};

const getAnimation = (postType: string) => {
  switch (postType) {
    case 'link':
      return animationLink;
    case 'job':
      return animationJob;
    case 'ask':
      return animationAsk;
  }
};

function PostTabBox({ children, onClick, active = false }) {
  return (
    <div
      className={clsx(
        'py-2 px-4 rounded-md cursor-pointer transition-all capitalize mr-3 text-sm shadow-md font-semibold',
        active
          ? 'bg-primary-light text-white'
          : 'bg-white hover:bg-secondary-dark',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function SavePost() {
  const [activeTab, setActiveTab] = useState(PostType.Link);

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
      .then(() => {
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
      <div className="flex w-full">
        {Object.values(PostType)
          .reverse()
          .map((pt, index) => (
            <PostTabBox
              key={index}
              active={pt === activeTab}
              onClick={() => setActiveTab(pt)}
            >
              {pt}
            </PostTabBox>
          ))}
      </div>

      <div className="mt-8 mb-3">
        Your new <span className="capitalize">{activeTab}</span> post will be
        published instantly!
      </div>

      <div className="flex items-start">
        <Animation loop={true} data={getAnimation(activeTab)}></Animation>

        <div
          className="flex-grow p-3 bg-white mr-5 rounded-md shadow-lg"
          style={{ minHeight: '400px' }}
        >
          {getForm(activeTab, addPostData.loading, handleOnError, handleOnSave)}
        </div>
      </div>

      {/* <div className="text-2xl mb-8">
        Create <span className="capitalize">{activeTab}</span> Post
      </div>

      <div className="flex">
        <div className="flex-grow p-3 bg-white mr-5 rounded-md">
          {getForm(activeTab, addPostData.loading, handleOnError, handleOnSave)}
        </div>

        <div style={{ minWidth: '200px' }}>
          {Object.values(PostType)
            .reverse()
            .map((pt, index) => (
              <PostTabBox
                key={index}
                active={pt === activeTab}
                onClick={() => setActiveTab(pt)}
              >
                {pt}
              </PostTabBox>
            ))}
        </div>
      </div> */}
    </div>
  );
}

function getForm(type, loading, handleOnError, handleOnSave) {
  switch (type) {
    case PostType.Link:
      return (
        <FormSaveLinkPost
          initialFields={initialFields}
          loading={loading}
          processError={handleOnError}
          processSave={handleOnSave}
        />
      );
    case PostType.Job:
      return (
        <FormSaveJobPost
          initialFields={initialFields}
          loading={loading}
          processError={handleOnError}
          processSave={handleOnSave}
        />
      );
    case PostType.Ask:
      return (
        <FormSaveAskPost
          initialFields={initialFields}
          loading={loading}
          processError={handleOnError}
          processSave={handleOnSave}
        />
      );
  }
}

SavePost.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default SavePost;
