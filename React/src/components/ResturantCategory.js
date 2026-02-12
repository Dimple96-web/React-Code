import ItemList from "./ItemList";
const ResturantCategory = ({ itemList, showItem, indexUpdate }) => {
  const handleClick = () => {
    indexUpdate();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {itemList.title} ({itemList.itemCards.length})
          </span>
          <span>{"🔽"}</span>
        </div>
        {showItem ? <ItemList items={itemList.itemCards} /> : null}
      </div>
    </div>
  );
};
export default ResturantCategory;
