import { Route, Routes, Link } from "react-router-dom";
import { Button } from "antd";
import Katalog from "./Catalog";
import About from "./About";



export default function MainPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-screen gap-8">
        <p className="text-4xl text-neutral-300">mercury</p>
        <p className="text-6xl">Одежда из другого измерения</p>
        <div>
          <Link to="/katalog">
            <Button className="text-xl" type="primary">
              Каталог
            </Button>
          </Link>
          <Link to="/About">
            <Button className="text-xl"> О нас</Button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}
