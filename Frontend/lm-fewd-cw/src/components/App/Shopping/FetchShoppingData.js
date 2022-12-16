import React, { useEffect, useState, useCallback } from "react";
import ShoppingItems from "./ShoppingItems";

const FetchDataShopping = () => {
    const [foods, setFoods]=useState([{
        id:"",
        name:""
      }]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3001/ingredients";
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

  return (
    <div>
    <ShoppingItems items={foods} /> 
    </div>
  );
};
export default FetchDataShopping;