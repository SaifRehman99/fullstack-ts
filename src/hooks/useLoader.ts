import { useState, useEffect } from "react";

const useLoader = (durationInSeconds: number) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, durationInSeconds * 1000);

    return () => clearTimeout(loadingTimer);
  }, [durationInSeconds]);

  return loading;
};

export default useLoader;
