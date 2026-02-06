import { useState, useEffect } from "react";

const useNetworkStatus = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlinestatus(false);
    });

    window.addEventListener("online", () => {
      setOnlinestatus(true);
    });
  }, []);

  return onlinestatus;
};

export default useNetworkStatus;
