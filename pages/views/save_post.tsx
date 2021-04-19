import { Position } from 'lib/common';
import Button from 'pages/components/atomic/button';
import TextField from 'pages/components/atomic/textField';
import Toaster from 'pages/components/atomic/toast/Toaster';
import useForm from 'pages/hooks/useForm';
import DefaultLayout from 'pages/layouts/defaultLayout';
import React, { useReducer, useState } from 'react';

const AppToaster = Toaster.create({ position: Position.BOTTOM });

function SavePost() {
  const [{ imageURL, title, link }, dispatch] = useForm({
    imageURL: '',
    title: '',
    link: '',
  });

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
                dispatch({ imageURL: e.target.value });
              }}
            />
          </div>

          <TextField placeholder="Title" />
          <TextField placeholder="Link" type="url" />

          <Button>Add</Button>
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
