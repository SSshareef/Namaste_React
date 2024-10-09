import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import {CDN_URL} from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={CDN_URL + cloudinaryImageId} />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <div className="rating">
          <FontAwesomeIcon icon={faStar} className="star" />
          <h5>{avgRating}</h5>
          <FontAwesomeIcon icon={faCircle} className="dot" />
          <h5>{slaString}</h5>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};
