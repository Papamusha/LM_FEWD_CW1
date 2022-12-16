import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";
import FetchGraphData from "../BarChart/FetchNutrition";

const FetchNut = ({ query }) => {
  const [nutrition, setNutrition] = useState({
    sugar_g: " ",
    fiber_g: " ",
    serving_size_g: " ",
    sodium_mg: " ",
    name: " ",
    potassium_mg: " ",
    fat_saturated_g: " ",
    fat_total_g: " ",
    calories: " ",
    cholesterol_mg: " ",
    protein_g: " ",
    carbohydrates_total_g: " ",
  });
  const FetchNut = useCallback(() => {
    const url =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
    console.log(url);
    const options = {
      method: "GET",
      //api key is unique to user, change this if required.
      headers: {
        "X-RapidAPI-Key": "49ac9500b6msh96fc441ae9c0173p1ab2cfjsn1d79aa27e131",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json(JSON.stringify))
      .then((incomingData) => {
        console.log(incomingData);
        setNutrition(incomingData.items[0]);
      });
  }, [query]);
  useEffect(() => {
    FetchNut();
  }, [FetchNut, query]);
  // the h5 is required because an incorrect search brings up a blank screen, users have to return to the prior page using their browser history, autocomplete was attempted but never got anywhere
  return (
    <div style={{ width: '600px' }}>
        <h5>Please note that this search makes use of the calorieninjas API and can only intake items from that API. This includes the items on the menu.</h5>
      <Nutrition item={nutrition} />

    </div>
  );
};
export default FetchNut;
