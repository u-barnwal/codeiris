import { PostType } from 'gql';
import Button from 'pages/components/atomic/button';
import TextField from 'pages/components/atomic/textField';
import React from 'react';
import useForm from '../../../lib/hooks/useForm';

function FormSaveJobPost({
  initialFields,
  loading = false,
  processError,
  processSave,
}) {
  const [props, dispatch, handleFieldChange] = useForm(initialFields);
  const { title, url } = props;

  const handleSubmit = () => {
    let error;

    if (title === '') error = 'You must enter a title!';
    else if (url === '') error = 'You must enter a URL!';

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
      />

      <TextField
        value={url}
        className="mb-4"
        label="URL"
        type="url"
        onChange={(e) => handleFieldChange('url', e)}
      />

      <Button loading={loading} onClick={handleSubmit}>
        Add
      </Button>
    </>
  );
}

export default FormSaveJobPost;
