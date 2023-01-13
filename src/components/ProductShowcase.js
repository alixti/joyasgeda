import { Alert, Col } from "react-bootstrap";

import ProductCard from "./ProductCard";

function ProductShowcase(props) {
  return (
    <>
      {props.list.length > 0 ? (
        props.list.map((item) => {
          return (
            <Col key={item.id}>
              <ProductCard data={item}></ProductCard>
            </Col>
          );
        })
      ) : (
        <Col>
          <Alert variant="info">No hay productos.</Alert>
        </Col>
      )}
    </>
  );
}

export default ProductShowcase;
