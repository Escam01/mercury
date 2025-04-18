import { Route, Routes, Link } from "react-router-dom";
// import MainPage from "../pages/MainPage";
import Katalog from "../pages/Catalog";
import About from "../pages/About";
import Support from "../pages/Support";
import  Basket  from "../pages/Basket";
import Outerwear from "../pages/Outerwear";
export default function Header(){
    return(
        <>
        <header>
          <div className=" flex justify-center items-center gap-8 text-white  mx-32">
            <ul className="gap-12 flex justify-center m-8">
              <div className="justify-start">
                <Link to={"/"}>
                  <img src="./logo.png" width={50} height={50} alt="logo" />
                </Link>
              </div>
              <li>
                <Link to="/katalog">Каталог</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/support">Тех.поддержка</Link>
              </li>
            </ul>
            <Link to="/basket" className="flex justify-end">
              <img
                src="./basket.png"
                width={35}
                height={35}
                alt="Корзина"
                className=""
              />
            </Link>
          </div>
        </header>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/outerwear" element={<Outerwear />} />
        </Routes>
      </>
    )
}