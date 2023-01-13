import React, { useContext } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { ShoppingCartContext } from "../utils/ShoppingCartUtils";
import ProductShowcase from "./ProductShowcase";

function Cart() {
  const { productList, productTotal } = useContext(ShoppingCartContext);

  return (
    <>
      <h1>Carrito</h1>
      <Row>
        <Col md={8}>
          <Row>
            <ProductShowcase list={productList}></ProductShowcase>
          </Row>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Total</span>
              <span>${productTotal} USD</span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
