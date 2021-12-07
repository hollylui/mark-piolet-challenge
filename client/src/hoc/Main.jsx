import { useState } from "react";
import Wollplatz from "../views/wollplatz/Wollplatz";
import ListContext from "../context/ListContext";

const Main = () => {
  const [wollplatLlist, setWollplatLlistList] = useState([]);

  const props = { wollplatLlist, setWollplatLlistList };

  return (
    <ListContext.Provider value={props}>
      <Wollplatz />
    </ListContext.Provider>
  );
};

export default Main;
