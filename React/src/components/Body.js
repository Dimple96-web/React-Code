import { useState } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [resturantList, setResturantList] = useState(resList);

  const filterTopRated = () => {
    const filteredList = resturantList.filter(
      (resturants) => resturants.info.avgRating > 4.5,
    );
    setResturantList(filteredList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resturantList.map((rest) => (
          <ResturantCard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
