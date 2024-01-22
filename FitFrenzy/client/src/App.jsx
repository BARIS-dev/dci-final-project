import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home.jsx";
import Header from "./components/shared/header/Header.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Account from "./components/pages/Account/Account.jsx";
import Signin from "./components/pages/Signin/Signin.jsx";
import { UserContextProvider } from "./context/user.context.jsx";

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
      </Routes>

      
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
