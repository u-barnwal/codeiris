import { PostType } from 'gql';
import Button from 'lib/components/atomic/button';
import TextArea from 'lib/components/atomic/textArea';
import TextField from 'lib/components/atomic/textField';
import React from 'react';
import useForm from '../../hooks/useForm';

export interface FormSaveAskPostProps {
  initialFields?: any;
  loading?: boolean;
  processError?: any;
  processSave?: any;
}

function FormSaveAskPost({
  initialFields,
  loading = false,
  processError,
  processSave,
}: FormSaveAskPostProps) {
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
