import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
  return (
    <div
      className="p-4 m-4 w-[250px] h-[445px] rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromtedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-1 font-bold bg-black text-white rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
