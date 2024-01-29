import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/shared/header/Header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Account from "./pages/Account/Account.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import { UserContextProvider } from "./context/user.context.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import AdminDashboard from "./pages/Admin/admin.dashboard.jsx";
import ProductCreate from "./pages/Admin/product.create.jsx";
import Signout from "./pages/Signout/signout.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signed-out" element={<Signout />} />
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
