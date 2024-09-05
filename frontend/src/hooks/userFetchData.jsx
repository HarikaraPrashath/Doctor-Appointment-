import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL, token } from '../config';

const useFetchData = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });

        if (!res.ok) {
          const result = await res.json();
          console.error('Fetch Error:', result);
          return toast.error(result.message || 'Something went wrong');
        }

        const result = await res.json();
        setData(result.data || []);
        
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return { data, loading, error };
};

export default useFetchData;
