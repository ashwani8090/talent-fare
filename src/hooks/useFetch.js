import {useCallback, useState} from 'react';

import {request} from '@utils/commonFunctions';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);

  const fetch = useCallback(async (config) => {
    setLoading(true);
    setResponse(undefined);
    setError(undefined);
    try {
      const data = await request(config);
      setLoading(false);
      setResponse(data);
      setError(undefined);
    } catch (err) {
      setLoading(false);
      setResponse(undefined);
      setError(err.message);
    }
  }, []);

  return [fetch, {loading, response, error}];
};

export default useFetch;
