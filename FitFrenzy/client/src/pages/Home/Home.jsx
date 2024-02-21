import "./Home.css";
import HeroItem from "../../components/Hero/HeroItem.jsx";
import BrandsBarItem from "../../components/BrandsBar/BrandsBarItem.jsx";
import Articles from "../ProductsList/Articles/Articles.jsx";
//import ProductsList from "../../components/shared/productsList/ProductsList";

const Home = () => {
  return (
    <>
      <HeroItem />
      <BrandsBarItem />
      <div className="articles">
        <Articles />
      </div>

      {/* <ProductsList /> */}
    </>
  );
};

export default Home;
