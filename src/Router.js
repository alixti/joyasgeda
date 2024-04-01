import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./Layout";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
