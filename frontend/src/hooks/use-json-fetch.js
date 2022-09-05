import { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (response.status >= 400) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
      }
      catch (e) {
        setError(e.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return [data, loading, error];
}