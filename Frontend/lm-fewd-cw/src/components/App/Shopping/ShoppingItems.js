import React, { useState } from "react";
import ShoppingContext from "./ShoppingContext";
import ShoppingSummary from "./ShoppingSummary";
import SubmitOrder from "./SubmitOrder";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

//this file is identical to MenuItems.js with Card.body changed to fit the ingredients list.

const IngredientItems = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleClick = (e, selectedItem) => {
    let newState = [...selectedItems, selectedItem];
    setSelectedItems(newState);
    console.log(selectedItems);
  };

  //Row and Col do not function properly, this seems to be due to the manner in which items.map is used
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Container className="col-6 submenu">
            <ul>
            <h2>Ingredients for shopping</h2>
              {items.map((ingredient) => (
                <Row xs={1} md={2} className="g-4">
                  <Col>
                <Card style={{ width:'15rem' }}>
                <Card.Img variant='top' src={require('./CardPlaceholder.png')} alt='Food Image' />
                <Card.Body>
                  <Card.Title>{ingredient.name}</Card.Title>
                  <Button onClick={(e) => handleClick(e, ingredient.name)} variant="primary">Add to list</Button>
                </Card.Body>
              </Card> <br/>
              </Col>
              </Row>
              ))}
            </ul>
          </Container>
          <ShoppingContext.Provider value={[selectedItems, setSelectedItems]}>
            <div className="col-3">
              <ShoppingSummary />
            </div>
            <div className="col-3">
              <SubmitOrder />
            </div>
          </ShoppingContext.Provider>
        </div>
      </div>
    </>
  );
};

export default IngredientItems;