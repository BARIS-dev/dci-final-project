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
import Cart from "./pages/Cart/cart.jsx";
import Signout from "./pages/Signout/Signout.jsx";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import RegisterPage from "./pages/Register/Register.jsx";
import Navbar from "./components/shared/Navbar/Navbar.jsx";

function App() {
  // test data from data folder
  // useEffect(() => {
  //   // get data from data folder
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <UserContextProvider>
        <Navbar />
        {/*         <Navbarchat /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signed-out" element={<Signout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="product-create" element={<ProductCreate />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
