import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Account from "./pages/Account/Account.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import { UserContextProvider } from "./context/user.context.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import Footer from "./components/shared/Footer/Footer.jsx";
import AdminDashboard from "./pages/Admin/admin.dashboard.jsx";
import ProductCreate from "./pages/Admin/product.create.jsx";
import ProductDetail from "./pages/Product/product.detail.jsx";
import Signout from "./pages/Signout/Signout.jsx";
import Navbarchat from "./components/chat/Navbarchat/NavbarChat.jsx";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods.jsx";
import Navbar from "./components/shared/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <Navbar />
        {/*         <Navbarchat /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signed-out" element={<Signout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="product-create" element={<ProductCreate />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
