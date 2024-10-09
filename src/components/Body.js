import { useEffect, useState } from "react";
// import { resDataObject } from "../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999998&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter_btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (topRating) => topRating.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((eachCard) => {
          return <RestaurantCard key={eachCard.info.id} resData={eachCard} />;
        })}
      </div>
    </div>
  );
};
