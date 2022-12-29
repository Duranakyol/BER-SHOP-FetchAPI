import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
