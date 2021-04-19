import { useReducer } from 'react';

const reducer = (state, updateObject) => {
  return { ...state, ...updateObject };
};

const useForm = (defaultProperties) => {
  const [properties, dispatch] = useReducer(reducer, defaultProperties);

  return [properties, dispatch];
};

export default useForm;
