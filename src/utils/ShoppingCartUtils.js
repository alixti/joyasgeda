import { createContext, useState } from "react";
const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [productTotal, setProductTotal] = useState(0);

  function addProduct(product) {
    const newProductList = [...productList, product];
    setProductList(newProductList);
    updateTotal(newProductList);
  }

  function updateTotal(list) {
    let total = 0;
    list.forEach((item) => {
      total = total + item.price;
    });
    setProductTotal(total.toFixed(2));
  }

  function getProductById(id) {
    return productList.find((item) => item.id === id);
  }

  function hasProduct(id) {
    return Boolean(getProductById(id));
  }

  function removeProduct(id) {
    const product = getProductById(id) || false;
    if (product !== false) {
      let filteredArray = productList.filter((item) => item.id !== id);
      setProductList(filteredArray);
      updateTotal(filteredArray);
    } else {
      alert("El producto no existe.");
    }
  }

  return <ShoppingCartContext.Provider value={{ productList, addProduct, hasProduct, removeProduct, productTotal }}>{children}</ShoppingCartContext.Provider>;
}

export { ShoppingCartContext, ShoppingCartProvider };
