import { PostType } from 'gql';
import Button from 'lib/components/atomic/button';
import TextField from 'lib/components/atomic/textField';
import React from 'react';
import useForm from '../../hooks/useForm';

export interface FormSaveJobPostProps {
  initialFields?: any;
  loading?: boolean;
  processError?: any;
  processSave?: any;
}

function FormSaveJobPost({
  initialFields,
  loading = false,
  processError,
  processSave,
}: FormSaveJobPostProps) {
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

    processSave({ title, url, type: PostType.Job }, reset);
  };

  const reset = () => dispatch(initialFields);

  return (
    <>
      <TextField
        value={title}
        className="mb-4"
        label="Title"
        onChange={(e) => handleFieldChange('title', e)}
        required
      />

      <TextField
        value={url}
        className="mb-4"
        label="URL"
        placeholder="https://"
        type="url"
        onChange={(e) => handleFieldChange('url', e)}
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

export default FormSaveJobPost;
