import React, {useCallback, useState} from "react";
import axios from "axios";


const useForm = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState<null | string>(null);

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

  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
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
      const res = await axios.post('http://localhost:5000/addUrl', {
        url: input
      });
      if (res.data.status === 'error') {
        setErrorMessage(res.data.message);
      } else {
        setSubmittedUrl(input);
        setInput('');
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setErrorMessage(e!.response!.data.message || 'Server Error');
      }
      setErrorMessage('Server Error')
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, validateInput]);

  return {
    input,
    handleChange,
    handleSubmit,
    isLoading,
    errorMessage,
    submittedUrl
  }
};

export default useForm
