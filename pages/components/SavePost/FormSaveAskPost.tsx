import { PostType } from 'gql';
import Button from 'pages/components/atomic/button';
import TextArea from 'pages/components/atomic/textArea';
import TextField from 'pages/components/atomic/textField';
import React from 'react';
import useForm from '../../../lib/hooks/useForm';

function FormSaveAskPost({
  initialFields,
  loading = false,
  processError,
  processSave,
}) {
  const [props, dispatch, handleFieldChange] = useForm(initialFields);

  const handleSubmit = () => {
    let error;

    if (props.title === '') error = 'You must enter the question!';
    else if (props.body === '') error = 'You must enter the body!';

    if (error) {
      processError(error);
      return;
    }

    processSave(
      { title: props.title, body: props.body, type: PostType.Ask },
      reset,
    );
  };

  const reset = () => dispatch(initialFields);

  return (
    <>
      <TextField
        value={props.title}
        label="Question"
        onChange={(e) => handleFieldChange('title', e)}
        className="mb-4"
        required
      />

      <TextArea
        value={props.body}
        label="Body"
        onChange={(e) => handleFieldChange('body', e)}
        className="w-full"
        required
      />

      <Button
        loading={loading}
        onClick={handleSubmit}
        className="bg-success mt-6"
      >
        Publish Post
      </Button>
    </>
  );
}

export default FormSaveAskPost;
