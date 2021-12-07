import { useContext, useEffect } from "react";
import ListContext from "../../context/ListContext";
import axios from "axios";
import ListItems from "../../components/ListItems";

const Wollplatz = () => {
  const { setWollplatLlistList } = useContext(ListContext);

  const url = `http://localhost:4000/wollplatz`;

  const requestWollplatz = async () => {
    try {
      const response = await axios.get(url);
      setWollplatLlistList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestWollplatz();
  }, []);

  return (
    <div>
      <h1>Wollplatz Product Information</h1>
      <div className="listItems">
        <ListItems />
      </div>
    </div>
  );
};

export default Wollplatz;
