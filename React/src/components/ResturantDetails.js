import { resturantDetails } from "../utils/mockData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantDetails = () => {
  let { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  //Fetch data from the custom hooks
  //let resturantData = useResturantDetails(resId);
  let resturantData = resturantDetails;
  if (resturantData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resturantData?.data?.cards[2]?.card?.card?.info;
  const category =
    resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {category.map((cate, index) => (
        <ResturantCategory
          key={cate.card?.card?.categoryId}
          itemList={cate.card?.card}
          showItem={index === showIndex ? true : false}
          indexUpdate={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantDetails;
