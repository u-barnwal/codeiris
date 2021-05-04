import { PostType } from 'gql';
import Button from 'lib/components/atomic/button';
import TextField from 'lib/components/atomic/textField';
import React from 'react';
import useForm from '../../hooks/useForm';

export interface FormSaveLinkPostProps {
  initialFields?: any;
  loading?: boolean;
  processError?: any;
  processSave?: any;
}

function FormSaveLinkPost({
  initialFields,
  loading = false,
  processError,
  processSave,
}: FormSaveLinkPostProps) {
  const [props, dispatch, handleFieldChange] = useForm(initialFields);

  const { title, url } = props;

  const handleSubmit = () => {
    let error;

    if (title === '') error = 'You must enter the title!';
    else if (url === '') error = 'You must enter the URL!';

    if (error) {
      processError(error);
      return;
    }

    processSave({ title, url, type: PostType.Link }, reset);
  };

  const reset = () => dispatch(initialFields);

  return (
    <>
      <TextField
        value={title}
        label="Title"
        onChange={(e) => handleFieldChange('title', e)}
        className="mb-4"
        required
      />

      <TextField
        value={url}
        label="URL"
        placeholder="https://"
        type="url"
        onChange={(e) => handleFieldChange('url', e)}
        className="mb-4"
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

export default FormSaveLinkPost;
