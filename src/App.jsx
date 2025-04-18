import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Katalog from "./pages/Catalog";
import Support from "./pages/Support";
import  Basket  from "./pages/Basket";
import Outerwear from "./pages/Outerwear";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/outerwear" element={<Outerwear />} />
      </Routes>
    </>
  );
}
