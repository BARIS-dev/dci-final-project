import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Header from "./components/shared/header/Header.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Account from "./components/pages/Account/Account.jsx";
import Signin from "./components/pages/Signin/Signin.jsx";
import { UserContextProvider } from "./context/user.context.jsx";
import Payment from "./pages/payment/Payment.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import AdminDashboard from "./pages/Admin/admin.dashboard.jsx";
import ProductCreate from "./pages/Admin/product.create.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="product-create" element={<ProductCreate />} />
          </Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
