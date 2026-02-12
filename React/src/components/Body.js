import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ResturantCard, { withPromtedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const ResturantPromoted = withPromtedLabel(ResturantCard);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

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

  const isOnline = useNetworkStatus();
  if (isOnline === false) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  //Conditional rendering
  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchValue}
            onChange={setSearchHandler}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-2 p-2 flex items-center">
          <label>User Name</label>
          <input
            className="border border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((rest) => (
          <Link key={rest.info.id} to={"/resturants/" + rest.info.id}>
            {rest.info.avgRating <= 4.5 ? (
              <ResturantPromoted resData={rest} />
            ) : (
              <ResturantCard resData={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
