import React, { useState } from "react";
import FetchSearchData from "./FetchSearchData";
import Button from "react-bootstrap/esm/Button";

function Search() {
  const [searchString, setSearchString] = useState("");
  const [searchField, setSearchField] = useState("apple");

  function handleClick() {
    setSearchField(searchString);
  }
  //search bar contained in return
  return (
    <div>
      <div>
        <p>Enter a food item to search for its nutritional value</p>
        <input style={{ width: '600px' }}
          className="form-control"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchString(e.target.value)}
        /><br/>
        <Button onClick={handleClick}>Search</Button>
      </div><br/>
      <FetchSearchData query={searchField} />
    </div>
  );
}

export default Search;