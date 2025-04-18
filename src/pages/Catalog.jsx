import Outerwear from "./Outerwear.jsx";
import { Route, Routes, Link } from "react-router-dom";
import { arrayCards } from "../api/Cards.js";
import ShortDisplayCard from "../components/ShortDisplayCard.jsx";
import Header from "../components/Header.jsx";

export default function Katalog() {
  return (
    <>
      <Header />
      <div className="w-1/4 flex flex-wrap gap-8 justify-start px-8 ">
        {arrayCards.map((card) => (
          <ShortDisplayCard
            key={card.key}
            title={card.name}
            alt = {card.name}
            src={`${import.meta.env.BASE_URL}public/${card.img}`} //
            description={card.price}
          />
        ))}
      </div>
      <Routes>
        <Route path="/outerwear" element={Outerwear} />
      </Routes>
    </>
  );
}
