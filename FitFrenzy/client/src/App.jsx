import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Account from "./pages/Account/Account.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import { UserContextProvider } from "./context/user.context.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import AdminDashboard from "./pages/Admin/admin.dashboard.jsx";
import ProductCreate from "./pages/Admin/product.create.jsx";
import ProductDetail from "./pages/Product/product.detail.jsx";
import Cart from "./pages/Cart/cartPage.jsx";
import Signout from "./pages/Signout/Signout.jsx";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import RegisterPage from "./pages/Register/Register.jsx";
import Navbar from "./components/shared/Navbar/Navbar.jsx";
import Favorites from "./pages/Favorites/favorites.jsx";
import ProductsList from "./pages/ProductsList/ProductsList.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";
import PaymentCheck from "./pages/Payment/PaymentCheck.jsx";
import PaymentSuccess from "./pages/Payment/PaymentSuccess.jsx";
import Sales from "./pages/Sales/Sales.jsx";
import Categories from "./pages/Categories/Categories.jsx";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signed-out" element={<Signout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/payment-check" element={<PaymentCheck />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="product-create" element={<ProductCreate />} />
          </Route>
          <Route path="*" element={<h2>Not Found</h2>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products-list" element={<ProductsList />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
