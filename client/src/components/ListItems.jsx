import { useContext } from "react";
import ListContext from "../context/ListContext";

const ListItems = () => {
  const { wollplatLlist } = useContext(ListContext);
  return (
    <>
      {wollplatLlist.map((item, index) => {
        return (
          <div key={index} className="list">
            <p>Brand: {item.brand}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price} Euro</p>
            <p>Deliver Time: {item["deliver time"]}</p>
            <p>Needle Size: {item["needle size"]}</p>
            <p>Composition: {item.composition}</p>
          </div>
        );
      })}
    </>
  );
};

export default ListItems;
