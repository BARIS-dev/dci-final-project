import "./favorites.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FavoritesContext } from "../../context/favorites.context.jsx";

function Favorites() {
  const { favorites, deleteFavorite } = useContext(FavoritesContext);
  //console.log(favorites);

  return (
    <section className="favorites">
      <div className="breadcrumb-trail">
        <p>Startseite &raquo; Favoritenliste</p>
      </div>
      <h2>Deine Favoritenliste</h2>
      <div className="favorites-container">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="favorites-item">
            <img src={favorite.image} alt={favorite.name} />
            <div className="favorite-item-right">
              <div className="favorite-item-info">
                <Link to={`/product/${favorite.id}`}>
                  <h5>{favorite.name}</h5>
                </Link>
                <p>{favorite.price} €</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => deleteFavorite(favorite.id)}
              >
                Entfernen
              </button>
            </div>
          </div>
        ))}
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
    </section>
  );
}

export default Favorites;
