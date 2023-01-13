import { Row } from "react-bootstrap";

import ProductShowcase from "./ProductShowcase";

import productjsonlist from "../products.json";
function Catalog() {
  const list = productjsonlist;

  return (
    <>
      <h1>Catalogo</h1>
      <Row>
        <ProductShowcase list={list}></ProductShowcase>
      </Row>
    </>
  );
}

export default Catalog;
