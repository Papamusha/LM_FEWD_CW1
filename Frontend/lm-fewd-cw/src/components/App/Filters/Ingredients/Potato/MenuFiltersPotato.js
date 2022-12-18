import React, { useState } from "react";
import OrderContext from "../../../OrderContext";
import OrderSummary from "../../../OrderSummary";
import SubmitOrder from "../../../SubmitOrder";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarRating from "../../../Rating";

//all ingredient filters are identical to MenuItems.js, with a filter added specific to the ingredient

const FilteredPotato = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  //filter criteria
  let filterPotato = items.filter(item => item.ingredients.includes('potato'));
  console.log(filterPotato);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
    console.log(selectedItems);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 submenu">
            <h2>Menu</h2>
            <ul>
              {filterPotato.map((item) => (
                <Row>
                  <Col>
                <Card style={{ width:'55rem' }}>
                <Card.Img variant='top' src={require('./CardPlaceholder.png')} alt='Food Image' />
                <Card.ImgOverlay>
                <Card.Body>
                  <Card.Title>{item.category}: {item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>Ingredients: {item.ingredients}</Card.Text>
                  <Card.Text>Estimated price per portion: £{item.price}</Card.Text>
                  <Card.Text>{item.recipeStep1}</Card.Text>
                  <Card.Text>{item.recipeStep2}</Card.Text>
                  <Button onClick={(e) => handleClick(e, item.name)} variant="primary">Add to Order</Button>
                  <StarRating />
                </Card.Body>
                </Card.ImgOverlay>
              </Card> <br/>
              </Col>
              </Row>
              ))}
            </ul>
          </div>
          <OrderContext.Provider value={[selectedItems, setSelectedItems]}>
            <div className="col-3">
              <h2>Filters</h2>
                <h3>Dish Type</h3>
                <Button style={{ margin:'10px' }} href='/home'>Revert Filters</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/main'>Main</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/side'>Side</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/snacks'>Snacks</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/pudding'>Pudding</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/cake'>Cake</Button>
                <h3>Ingredients Filter</h3>
                <Button style={{ margin:'10px' }} href='/home/filter/meat'>Meat</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/potato'>Potato</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/eggs'>Eggs</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/nuts'>Nuts</Button>
                <Button style={{ margin:'10px' }} href='/home/filter/fish'>Fish</Button>
              <OrderSummary />
            </div>
            <div className="col-3">
              <SubmitOrder />
            </div>
          </OrderContext.Provider>
        </div>
      </div>
    </>
  );
};

export default FilteredPotato;