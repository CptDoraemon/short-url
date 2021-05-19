import React, {useCallback, useState} from "react";

const useForm = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const validateInput = useCallback(() => {
    let message = '';
    if (!input.length) {
      message = 'URL cannot be empty';
    } else if (input.length > 200) {
      message = 'URL too long'
    }
    setErrorMessage(message);
    return message === ''
  }, [input.length]);

  const handleSubmit = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) {
      return
    }
    const isInputValid = validateInput();
    if (!isInputValid) {
      return
    }
    setErrorMessage('');
    setIsLoading(true);
    console.log('submit');
  }, [isLoading, validateInput]);

  return {
    input,
    handleChange,
    handleSubmit,
    isLoading,
    errorMessage
  }
};

export default useForm
