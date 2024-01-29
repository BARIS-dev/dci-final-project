import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Header from "./components/shared/header/Header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Account from "./components/pages/Account/Account.jsx";
import Signin from "./components/pages/Signin/Signin.jsx";
import { UserContextProvider } from "./context/user.context.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Footer from "./components/shared/footer/Footer.jsx";


function App() {
  return (
    <>
      <Header />
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </UserContextProvider>
      <Footer />
    </>
  );
}

export default App;
