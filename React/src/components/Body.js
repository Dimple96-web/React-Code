import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const filterTopRated = () => {
    const filteredList = resturantList.filter(
      (resturants) => resturants.info.avgRating > 4.5,
    );
    setResturantList(filteredList);
  };

  const fetchData = async () => {
    const fetchedData = await fetch(RES_LIST_URL);
    const fetchedJSON = await fetchedData.json();
    setResturantList(
      fetchedJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredList(
      fetchedJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const setSearchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = () => {
    const searchFilter = resturantList.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredList(searchFilter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Conditional rendering
  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            className="search-box"
            type="text"
            value={searchValue}
            onChange={setSearchHandler}
          />
          <button className="search-btn" onClick={searchHandler}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((rest) => (
          <Link key={rest.info.id} to={"/resturants/" + rest.info.id}>
            <ResturantCard resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
