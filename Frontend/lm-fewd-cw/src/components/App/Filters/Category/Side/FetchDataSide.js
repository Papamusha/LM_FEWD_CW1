import React, { useEffect, useState, useCallback } from "react";
import FilteredSide from "./MenuFiltersSide";

//this filter fetch and all other filter fetch files are identical to FetchData.js, the only change is return which matches the menu file of the category

const FetchDataSide = () => {
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

  return (
    <div>
    <FilteredSide items={foods} /> 
    </div>
  );
};
export default FetchDataSide;