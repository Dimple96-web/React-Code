import { useState, useEffect, use } from "react";
import { resturantDetails } from "../utils/mockData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const ResturantDetails = () => {
  let { resId } = useParams();
  const [resturantData, setResturantData] = useState(null);

  useEffect(() => {
    fetchResturantDetails();
  }, []);

  const fetchResturantDetails = async () => {
    const data = await fetch(MENU_URL + resId);
    setResturantData(resturantDetails);
  };
  if (resturantData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resturantData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantDetails;
