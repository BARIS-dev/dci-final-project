import  { useState, useEffect } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import "./Articles.css";



function Articles() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
       
        setProducts(response.data); 
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="card-container">
      {Array.isArray(products) && products.map(product => (
        <section key={product._id} className="card">
          <img src={product.image} alt={product.name} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-price">Price: ${product.price}</p>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">{product.averageRating}</span>
            </section>
          </div>
        </section>
      ))}
    </section>
  );
}

export default Articles;









/*function Articles() {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        if (Array.isArray(response.data)) {
          setProducts(response.data)

        } else {
          console.error("Die Api-Antwort ist kein Array:", response.data);
        }
        
        
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);



    return (
        <section className="card-container">
          {products.map(product => (
            <section key={product._id} className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img"
              />
              <div className="card-details">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-category">Category: {product.category}</p>
                <p className="card price">Price: ${product.price}</p>
                
                <section className="card-reviews">
                  <AiFillStar className="ratings-star" />
                  <span className="total-reviews">{product.averageRating}</span>
                  
                </section>
              </div>
            </section>
          ))}
        </section>
      );
    }
    
    export default Articles;/*




   









/*function Articles() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579115/k$a4e5545d7b3c735722072c33202b5eb5/sq/winterschuhe-herren-warm-wasserdicht-winterwandern-sh100-blau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                75 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579568/k$376c6239f4c6a4d0a5e76307b4397545/sq/wanderschuhe-mh120-halbhoch-wasserdicht-kinder-gr-3538-turkis.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              
              <span className="total-reviews">2</span>
            </section>

            <section className="card-price">
              <div className="price">
                30 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2164495/k$6df40368e2b7ac6d887b55812f132d71/sq/wanderschuhe-herren-atmungsaktiv-escape-500-fresh.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              
              <span className="total-reviews">3</span>
            </section>

            <section className="card-price">
              <div className="price">
                80 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579497/k$11bdadeb50c9743829241be7aa67d124/sq/winterschuhe-damen-halbhoch-warm-wasserdicht-winterwandern-sh500.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                60 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579290/k$8468656899ba30e314aff19f13e104bf/sq/winterschuhe-damen-halbhoch-leder-warm-wasserdicht-winterwandern-sh900-braun.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                70 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579242/k$626aeecd798bc629b208147cd263b0e3/sq/winterschuhe-herren-leder-hoch-warm-wasserdicht-winterwandern-sh900-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                90 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579406/k$dd7323636ecc4c363aeb30ea78693e97/sq/wanderschuhe-crossrock-halbh-wasserdicht-schnellschnurung-kinder-gr-2834-grau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                70 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579512/k$b560a0b2371ca770ca6b63a5b09cc3fe/sq/wanderschuhe-crossrock-halbh-wasserdicht-schnellschnurung-kinder-gr-3538-grau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              65 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2578997/k$0ee93cfa5084bc45b18fc1aaf019d15f/sq/winterschuhe-kinder-gr-2434-leder-klett-warm-wasserdicht-sh500-braun.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              99 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2317397/k$fb9833d2b796c77819288d11d770da5f/sq/laufschuhe-trail-mt2-herren-blaugrun.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">EVADICT</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              120 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2583208/k$98aafedc771378d6f8762fdd7082ec27/sq/wanderschuhe-herren-nh100-halbhoch-grau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">QUECHUA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              85 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2573016/k$2534236b7289f69b09ddc7087894f903/sq/trekkingschuhe-herren-leder-hoch-breit-wasserdicht-bergwandern-mt100.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">FORCLAZ</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              115 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2415460/k$0deb88a531ff2a015e7b87f3cdccd161/sq/t-shirt-herren-rundhalsausschnitt-regular-500-schwarz.jpg?format=auto&f=969x969"
            alt="t-shirt"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">T Shirt DOMYOS</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                20 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2037327/k$43449ce0aa79a0931e79182d77808cdd/sq/t-shirt-langarm-seamless-wolle-bergsteigen-damen.jpg?format=auto&f=969x969"
            alt="t-shirt"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">T-shirt SIMOND</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              20 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2518269/k$ff9fdba7aa03ac53f2571a812fbfa360/sq/adidas-t-shirt-damen-vibaop-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">ADIDAS T-shirt</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              25 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2473079/k$18c17edb0d0fcf9503a395a657dbb64a/sq/puma-t-shirt-herren-baumwolle-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">PUMA T-shirt</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
              40 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m14411222/k$c2094cc84f160b0e668a9612e1b2cb88/sq/core-functional-t-shirt-herren-laufen-mit-recyceltes-polyester.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">NEWLINE T-shirt</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                35 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p1949471/k$364209fd43ff54e7f180ac1e28919407/sq/adidas-t-shirt-damen-weiss.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">ADIDAS T-shirt</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                45 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2232681/k$44e5b05a708151d5781a6c35f24a2803/sq/fussballhose-kurz-entrada-22-damenherren-schwarz-adidas.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">ADIDAS Shorts</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                50 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2464640/k$2128155f26c4de31847d8b9794c801c4/sq/radhose-kurz-ohne-trager-rc-100-herren-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">VAN RYSEL Shorts</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                25 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p1988733/k$88cab28e99bcd0d1dcc9d0176a67e2a2/sq/kinder-torwarthose-kurz-f100-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">KIPSTA Shorts</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                54 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2490944/k$95409e4d56d1ece7b3e2cece768c5bbc/sq/herren-mtb-short-kurze-radhose-expl-100-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">ROCKRIDER Shorts</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                30 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2490865/k$1f095e36f68618bd08b67503ea684b10/sq/radhose-kurz-mtb-expl-500-herren-2-in-1-radsport-innenhose-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">ROCKRIDE Shorts</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                20 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2598755/k$473abb24ed74ffb7228c68b6ad320596/sq/schneeanzug-skianzug-kinder-warm-wasserdicht-500-rosablau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">WEDZE Schneeanzug</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                95 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p1867979/k$76bf92fc67a6e03cbbf5bbaac894c668/sq/sportschuhe-kinder-klettverschluss-wasserdicht-strapazierfahig-resist.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">DECATHLON Sportschuh</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                50 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2583897/k$636f77bebd4c2e831033dc699bcc0067/sq/skijacke-kinder-warm-wasserdicht-550-blau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">WEDZE Skijacke</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                50 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579904/k$492ab2201f65a3511de94bd994b87f99/sq/skihose-warm-wasserdicht-100-kinder-neonrosa.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">WEDZE Skihose</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                20 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2576945/k$32b2599d5e38124e5ee95d3b819d6681/sq/skibrille-snowboardbrille-erwachsenekinder-allwetter-g-500-i-grau.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">WEDZE Skibrille</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                55 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2598966/k$261e05a2209b76268de8ce15bc58fc5c/sq/ruckenprotektor-ski-snowboard-kinder-dbck-500-orange.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">DREAMSCAPE Rückenprotektor Ski</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                65 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m13368030/k$77e1ebc8dabdc680c5359fb12605f5b4/sq/kurzhantelset-6-x-kurze-hanteln-mit-20-kg.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">TUNTURI Hanteln</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                70 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m1028771/k$b70239067b8f2fac420aa3171e4b4745/sq/christopeit-hanteln-2-x-3-kg.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">CHRISTOPEIT Hanteln</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                20 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2174842/k$7694ff37ee8fe79f8b7aa594743a3b2f/sq/hantel-15-kg-crosstraining-krafttraining-hex-dumbbell-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">CORENGTH Hantel</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                55 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m2664830/k$75109313446b2454516642a52642a8b7/sq/hantel-hex-dumbbell-20-kg-mit-gummigriff.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">MATCHU SPORTS Hanteln</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                160 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m3906207/k$0dfb1c716a0c5d5a92c9fe5a86d04936/sq/hexa-hantel-pro-stuck.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">MUSCLE POWER Hanteln</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                40 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2175081/k$8f08c974fb24095b37361ca5a61eee49/sq/hantel-225-kg-crosstraining-krafttraining-hex-dumbbell-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">CORENGTH Hanteln</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                85 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m9462983/k$f906e2467fa1713077fb106d9d794f0c/sq/springseil-vital-fit-speed-rope-fur-kardio-und-intervalltraining.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">SHAPEVITAl</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                15 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m10655946/k$e6ac378a6dc8fb2d1db8d132b01ca6fb/sq/eliteathlete-premium-springseil-herren-damen-speed-rope.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">ELITE ATHLETE</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                22 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m6819991/k$32c0c69f249a012cddf4fdcc75becb7d/sq/northwall-s1-verstellbares-springseil.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">NORTHWALL</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                36 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m14952334/k$a0f4f5518fd318d4139476aa2924e70b/sq/verstellbares-springseil-pro-speed-rope-3m-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">TUNTURI</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                40 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m2457363/k$9324329ed109b05fb612a6e2aa894e4d/sq/profi-springseil-mit-gewichten-langenverstellbar-mit-tasche-and-ersatzseil.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">VIA FORTIS</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                25 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2528845/k$927e6f1741e716528b75cee31918923f/sq/skihandschuhe-herren-gore-tex-reusch-snow-spirit.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">REUSCH</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                40 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m4450099/k$26bc8ff8177032331a095d5065a667d8/sq/reusch-handschuhe-multisport-glove-gore-tex-infinium.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">REUSCH</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                33 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p1902371/k$642d82c2934c4da77c826ab2a971d8c0/sq/jagdhandschuhe-faustlinge-900-warm.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">SOLOGNAC</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                30 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579055/k$cd6b61f0c2119aeddf83e56090318991/sq/skihandschuhe-kinder-warm-wasserdicht-900-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">WEDZE</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                40 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2579333/k$212a9df773ff9a49d355ecd344368778/sq/skihandschuhe-erwachsene-freeride-900-braunschwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">Skihandschuhe</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                60 €
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2490367/k$e474981cc944a1395f8ca86b4077a183/sq/reithandschuhe-classic-leder-damenherren-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">Reithandschuh FOUGANZA</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                30 €
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m11517931/k$2612c5295ef9de7ad36630818acb798d/sq/opti-men-180tabs-optimum-nutrition.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">OPTIMUM NUTRITION </h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                20 €
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2277809/k$e7abdbba7dcb16f69997d452e0ae71c1/sq/energy-gel-hydrogel-multipack-cola-x24.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">POWERBAR</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                45 €
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2367921/k$c3ceefdc246a9ed9ae1b5a7e122dc9f4/sq/proteinpulver-whey-isolate-schoko-900-g.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">DOMYO Proteinpulver</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                30 €
              </div>
            </section>
          </div>
        </section>
        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m14581009/k$e99ba0248f5c6aad6d19c1937a6ade93/sq/gold-standard-100-whey-protein-extreme-milk-chocolate-71-portionen-2270-gramm.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">OPTIMUM NUTRITION Protein Extreme Milk Chocolate</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                45 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m11612817/k$274af6328412af270b006f945df1e836/sq/protein-shaker-800ml-auslaufsichere-trinkflasche-schwarz.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">FSA NUTRITION Protein Shaker 800ml</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                15 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/m10817520/k$198a1846c73b2651f7de968c88d6af12/sq/gainer-serious-mass-273kg-optimum-nutrition.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">OPTIMUM NUTRITION Gainer Serious Mass</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                45 €
              </div>
            </section>
          </div>
        </section>

        <section className="card">
          <img
            src="https://contents.mediadecathlon.com/p2483448/k$ad8075ed76501e6440b95515aea41ace/sq/proteinpulver-vegan-750-g-schokolade.jpg?format=auto&f=969x969"
            alt="Shoes"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card.title">WEIDE Proteinpulver Vegan</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="total-reviews">4</span>
            </section>

            <section className="card-price">
              <div className="price">
                28 €
              </div>
            </section>
          </div>
        </section>

      </section>
    </>
  );
};*/





