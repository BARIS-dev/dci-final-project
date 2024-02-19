import "./Home.css";
import HeroItem from "../../components/Hero/HeroItem.jsx";
import BrandsBarItem from "../../components/BrandsBar/BrandsBarItem.jsx";
//import ProductsList from "../../components/shared/productsList/ProductsList";

const Home = () => {
  return (
    <>
      <HeroItem />
      <BrandsBarItem />
      {/* <ProductsList /> */}
    </>
  );
};

export default Home;
