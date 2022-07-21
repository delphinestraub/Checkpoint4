import { Route, Routes } from "react-router-dom";
import LayoutFront from "./components/Layout/LayoutFront";
import LayoutAdmin from "./components/Layout/LayoutAdmin";
import ContactForm from "./components/ContactForm";
import DisplayProducts from "./pages/DisplayProducts";
import ProductsAdd from "./components/ProductsAdd";
import Home from "./pages/Home";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutFront />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/products" element={<DisplayProducts />} />
        </Route>
      </Routes>
      {/* Admin routes */}
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />} />
        <Route index element={<ProductsAdd />} />
      </Routes>
    </div>
  );
}
