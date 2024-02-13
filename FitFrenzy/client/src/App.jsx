import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Header from './components/shared/header/Header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Account from './pages/Account/Account.jsx';
import Signin from './pages/Signin/Signin.jsx';
import { UserContextProvider } from './context/user.context.jsx';
import Payment from './pages/payment/Payment.jsx';
import Footer from './components/shared/footer/Footer.jsx';
import AdminDashboard from './pages/Admin/admin.dashboard.jsx';
import ProductCreate from './pages/Admin/product.create.jsx';
import Signout from './pages/Signout/Signout.jsx';
import Register from './pages/Register/Register.jsx';
import api from './api/posts.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // get data from data folder
    const fetchData = async () => {
      try {
        const response = await api.get('/posts');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <UserContextProvider>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
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
