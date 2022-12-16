import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Login/Login";
import useToken from './useToken';
//import Sidebar from './SideBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMain from "./NavBar";
import FetchData from "./FetchData";
import FetchDataShopping from "./Shopping/FetchShoppingData";
import FetchSearchData from "./Search/SearchItems";
import FetchGraphData from "./BarChart/FetchNutrition";
import FetchDataMain from "./Filters/Category/Main/FetchDataMain";
import FetchDataCake from "./Filters/Category/Cake/FetchDataCake";
import FetchDataDrinks from "./Filters/Category/Drinks/FetchDataDrinks";
import FetchDataEggs from "./Filters/Ingredients/Eggs/FetchDataEggs";
import FetchDataFish from "./Filters/Ingredients/Fish/FetchDataFish";
import FetchDataMeat from "./Filters/Ingredients/Meat/FetchDataMeat";
import FetchDataNuts from "./Filters/Ingredients/Nuts/FetchDataNuts";
import FetchDataPudding from "./Filters/Category/Pudding/FetchDataPudding";
import FetchDataSide from "./Filters/Category/Side/FetchDataSide";
import FetchDataSnacks from "./Filters/Category/Snacks/FetchDataSnack";
import FetchDataPotato from "./Filters/Ingredients/Potato/FetchDataPotato";
import StarRating from "./Rating";

function App() {
  //token for login
  const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

  return (
    <>
    <NavMain />
    <br/>
    <br/>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>TRCA, where delicacy meets mediocrity.</h1>} />
            <Route path="/search" element={<FetchSearchData />} />
            <Route path="/home" element={<FetchData />} /> 
            <Route path="/rating" element={<StarRating />} />
            <Route path="/shopping" element={<FetchDataShopping />} />
            <Route path="/barchart" element={<FetchGraphData />} />
            <Route path ="/home/filter/main" element={<FetchDataMain />} />
            <Route path ="/home/filter/cake" element={<FetchDataCake />} />
            <Route path ="/home/filter/pudding" element={<FetchDataPudding />} />
            <Route path ="/home/filter/side" element={<FetchDataSide />} />
            <Route path ="/home/filter/drinks" element={<FetchDataDrinks />} />
            <Route path ="/home/filter/snacks" element={<FetchDataSnacks />} />
            <Route path ="/home/filter/meat" element={<FetchDataMeat />} />
            <Route path ="/home/filter/fish" element={<FetchDataFish />} />
            <Route path ="/home/filter/eggs" element={<FetchDataEggs />} />
            <Route path ="/home/filter/nuts" element={<FetchDataNuts />} />
            <Route path ="/home/filter/potato" element={<FetchDataPotato />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
