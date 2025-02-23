import { useState, useEffect } from 'react';

const useCoordinate = (lat, long) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only query if both lat and long are provided
    if (lat == null || long == null) return;

    const fetchCoordinateData = async () => {
      setLoading(true);
      setError(null);
      const url = `http://0.0.0.0:8000/coordinate/lat=${lat}&long=${long}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    console.log(lat,long)
    fetchCoordinateData();
  }, [lat, long]);

  return { data, loading, error };
};

export default useCoordinate;
