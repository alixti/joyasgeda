import React from "react";
import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { ShoppingCartContext } from "../utils/ShoppingCartUtils";
function ProductCard(props) {
  const { addProduct, hasProduct, removeProduct } = useContext(ShoppingCartContext);

  return (
    <Card>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.description}</Card.Text>
        <Card.Text className="text-success">$ {props.data.price} USD</Card.Text>
        {!hasProduct(props.data.id) ? (
          <Button
            variant="primary"
            onClick={(e) => {
              addProduct(props.data);
            }}
          >
            Añadir al carrito
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={(e) => {
              removeProduct(props.data.id);
            }}
          >
            Remover del carrito
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
