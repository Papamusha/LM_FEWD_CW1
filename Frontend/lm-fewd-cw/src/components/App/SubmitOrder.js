import React, { useContext, useState } from "react";
import OrderContext from "./OrderContext";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const SubmitOrder = () => {
  const [order, setOrder] = useContext(OrderContext);
  const [nameField, setNameField] = useState("");
  const [tableField, setTableField] = useState("");
  const [message, setMessage] = useState("");
  const addOrder = () => {
    let newOrder = [nameField, tableField, ...order];
    const orderString = JSON.stringify(newOrder);
    fetch(`http://localhost:3001/addOrder`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */* ",
        "Content-Type": "application/json",
      },
      body: orderString,
    })
      .then(() => {
        setMessage(
          "Hi " +
            nameField +
            " thank you for your order. You've ordered " +
            order
        );
        setOrder([]);
        setNameField("");
        setTableField("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container style={{ width:'400px', height:'400px', borderStyle:'solid' }}>
      <h2>Submit Order</h2><br/>
      <label> Enter your name:</label>
      <input required="yes"
        className="form-control"
        type="text"
        placeholder="Enter your name here ..."
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
      /><br/>
      <label> Enter your email address:</label>
      <input required="yes"
        className="form-control"
        type="text"
        placeholder="Enter your email here ..."
        value={tableField}
        onChange={(e) => setTableField(e.target.value)}
      /><br/>
      <Button onClick={addOrder}>Submit Menu</Button>
      <p>{message}</p>
    </Container>
  );
};
export default SubmitOrder;
