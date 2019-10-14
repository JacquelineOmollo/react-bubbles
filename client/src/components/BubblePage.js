import React, { useState, useEffect } from "react";
import axiosWithAuth from "./utils/axiousWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    theColors();
  }, []);

  const theColors = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        console.log("How about those colors", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err.res));
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
