import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductImage from "./components/ProductImage";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/products" Component={ProductImage} />
    </Routes>
  </Router>
);

export default App;
