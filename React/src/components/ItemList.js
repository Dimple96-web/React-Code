import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="items"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-sm text-left"
        >
          <div className="py-2">
            <span>{item?.card?.info.name}</span>
            <span> - ₹{item?.card?.info.price / 100}</span>
          </div>
          <p className="text-xs">{item?.card?.info?.description}</p>
          <div className="flex justify-end">
            <button
              className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
