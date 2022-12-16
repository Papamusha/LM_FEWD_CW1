import React, { useEffect, useState, useCallback } from "react";
import MenuItems from "./MenuItems";

const FetchData = () => {
    const [foods, setFoods]=useState([{
        id:"",
        name:"",
        price:"",
        category:"",
        ingredients:"",
        recipeStep1:"",
        recipeStep2:"",
        description:"",
        available:"",
      }]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3001/food";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setFoods(incomingData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //calls MenuItems with data from backend
  return (
    <div>
    <MenuItems items={foods} /> 
    </div>
  );
};
export default FetchData;