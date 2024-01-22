import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Header from "./components/shared/header/Header.jsx";
import Payment from "./pages/payment/payment.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
