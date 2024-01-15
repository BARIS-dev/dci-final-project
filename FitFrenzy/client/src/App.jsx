import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home.jsx";
import Header from "./components/shared/header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
