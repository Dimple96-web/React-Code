import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useResturantDetails = (resId) => {
  const [resturantData, setResturantData] = useState(null);

  useEffect(() => {
    fetchResturantDetails();
  }, []);

  const fetchResturantDetails = async () => {
    const data = await fetch(MENU_URL + resId);
    setResturantData(data);
  };

  return resturantData;
};

export default useResturantDetails;
