import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ReservationPage from "./pages/ReservationPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Success from "./pages/Success";
import Menu from "./pages/Menu";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/reservations" element={<ReservationPage />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}
