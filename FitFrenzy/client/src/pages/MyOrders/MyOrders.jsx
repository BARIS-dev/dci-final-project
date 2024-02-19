import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './MyOrders.css';
import { ToastContainer, toast } from 'react-toastify';

function MyOrders() {
  const { cart, deleteItem } = useContext(CartContext);

  const handleMessage = () => {
    toast.success('Ihre Rückgabe wurde beantragt');
  };

  const handleDelete = item => {
    deleteItem(item.id, item.size, item.color);
    toast.success('Ihrer Bestellung wurde storniert');
  };

  return (
    <div className="cart-items">
      {cart.map(item => {
        return (
          <>
            <div className="cart-item">
              <img className="cart-item-img" src={item.image} alt={item.name} />
              <div className="cart-item-content">
                <h6>Bestellnummer: #{item.id}</h6>

                <h3>
                  <small>Name: </small>
                  {item.name}
                </h3>
                <p>
                  <small>Größe: </small>
                  {item.size}
                </p>
                <p>
                  <small>Farbe: </small>
                  {item.color}
                </p>
                <p>
                  <small>Preis: </small>
                  {item.price}€
                </p>
                <p>
                  <small>Stück: </small>
                  {item.quantity}
                </p>
                <p>
                  <small>Status: </small> in Bearbeitung
                </p>
                <button
                  className="remove-btn"
                  onClick={() => handleDelete(item)}
                >
                  Stornieren
                </button>
              </div>
            </div>
          </>
        );
      })}

      <div className="cart-item">
        <img
          className="cart-item-img"
          src={
            'https://contents.mediadecathlon.com/p2415460/k$0deb88a531ff2a015e7b87f3cdccd161/sq/t-shirt-herren-rundhalsausschnitt-regular-500-schwarz.jpg?format=auto&f=969x969'
          }
          alt={'product'}
        />
        <div>
          <h6>Bestellnummer: #65d336d28a3b2a37588d7981</h6>

          <h3>
            <small>Name: </small>
            DOMYOS
          </h3>
          <p>
            <small>Größe: </small>L
          </p>
          <p>
            <small>Farbe: </small>
            Schwarz
          </p>
          <p>
            <small>Preis: </small>
            0.99 €
          </p>
          <p>
            <small>Stück: </small>3
          </p>
          <p>
            <small>Status: </small> versendet
          </p>
          <button className="remove-btn-2" onClick={() => handleMessage()}>
            Rückgabe beantragen
          </button>
        </div>
      </div>
      <div className="cart-item">
        <img
          className="cart-item-img"
          src={
            'https://contents.mediadecathlon.com/m14411222/k$c2094cc84f160b0e668a9612e1b2cb88/sq/core-functional-t-shirt-herren-laufen-mit-recyceltes-polyester.jpg?format=auto&f=969x969'
          }
          alt={'product'}
        />
        <div>
          <h6>Bestellnummer: #65d336d28a3b2a37588d7985</h6>

          <h3>
            <small>Name: </small>
            NEWLINE
          </h3>
          <p>
            <small>Größe: </small>XL
          </p>
          <p>
            <small>Farbe: </small>
            Blau
          </p>
          <p>
            <small>Preis: </small>
            35.99 €
          </p>
          <p>
            <small>Stück: </small>2
          </p>
          <p>
            <small>Status: </small> versendet
          </p>
          <button className="remove-btn-2" onClick={() => handleMessage()}>
            Rückgabe beantragen
          </button>
        </div>
      </div>
      <div className="cart-item">
        <img
          className="cart-item-img"
          src={
            'https://contents.mediadecathlon.com/p1949471/k$364209fd43ff54e7f180ac1e28919407/sq/adidas-t-shirt-damen-weiss.jpg?format=auto&f=969x969'
          }
          alt={'product'}
        />
        <div>
          <h6>Bestellnummer: #65d336d28a3b2a37588d7986</h6>

          <h3>
            <small>Name: </small>
            ADIDAS
          </h3>
          <p>
            <small>Größe: </small>M
          </p>
          <p>
            <small>Farbe: </small>
            Weiß
          </p>
          <p>
            <small>Preis: </small>
            45.99 €
          </p>
          <p>
            <small>Stück: </small>1
          </p>
          <p>
            <small>Status: </small> versendet
          </p>
          <button className="remove-btn-2" onClick={() => handleMessage()}>
            Rückgabe beantragen
          </button>
        </div>
      </div>
      <div className="cart-item">
        <img
          className="cart-item-img"
          src={
            'https://contents.mediadecathlon.com/p2464640/k$2128155f26c4de31847d8b9794c801c4/sq/radhose-kurz-ohne-trager-rc-100-herren-schwarz.jpg?format=auto&f=969x969'
          }
          alt={'product'}
        />
        <div>
          <h6>Bestellnummer: #65d336d28a3b2a37588d7988</h6>

          <h3>
            <small>Name: </small>
            VAN RYSEL
          </h3>
          <p>
            <small>Größe: </small>L
          </p>
          <p>
            <small>Farbe: </small>
            Rot
          </p>
          <p>
            <small>Preis: </small>
            25.99 €
          </p>
          <p>
            <small>Stück: </small>2
          </p>
          <p>
            <small>Status: </small> versendet
          </p>
          <button className="remove-btn-2" onClick={() => handleMessage()}>
            Rückgabe beantragen
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default MyOrders;
