import Marquee from "react-fast-marquee";

import "./BrandsBarStyle.css";
import nikeLogo from "../../assets/svg/nike.svg";
import adidasLogo from "../../assets/svg/adidas.svg";
import pumaLogo from "../../assets/svg/puma.svg";
import reebokLogo from "../../assets/svg/reebok.svg";
import jordanLogo from "../../assets/svg/jordan.svg";
import hummelLogo from "../../assets/svg/hummel.svg";
import underarmourLogo from "../../assets/svg/under-armour.svg";
import converseLogo from "../../assets/svg/converse.svg";
import asicsLogo from "../../assets/svg/asics.svg";
import filaLogo from "../../assets/svg/fila.svg";
import championLogo from "../../assets/svg/champion.svg";

const BrandsBarItem = () => {
  return (
    <div className="brands-bar">
      <Marquee gradient={false} speed={10}>
        <img src={nikeLogo} alt="nike-logo" />
        <img src={adidasLogo} alt="adidas-logo" />
        <img src={pumaLogo} alt="puma-logo" />
        <img src={reebokLogo} alt="reebok-logo" />
        <img src={jordanLogo} alt="jordan-logo" />
        <img src={hummelLogo} alt="hummel-logo" />
        <img src={underarmourLogo} alt="underarmour-logo" />
        <img src={converseLogo} alt="converse-logo" />
        <img src={asicsLogo} alt="asics-logo" />
        <img src={filaLogo} alt="fila-logo" />
        <img src={championLogo} alt="champion-logo" />
      </Marquee>
    </div>
  );
};

export default BrandsBarItem;
