import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (item) => {
    const chosenItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
    };

    if (!favorites) {
      localStorage.setItem("favorites", JSON.stringify([chosenItem]));
      setFavorites([chosenItem]);
      toast.success("Produkt zu Favoriten hinzugefügt");
      return;
    }

    if (favorites.some((favorite) => favorite.id === item.id)) {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      toast.success("Produkt aus Favoriten entfernt");
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, chosenItem])
      );
      setFavorites([...favorites, chosenItem]);
      toast.success("Produkt zu Favoriten hinzugefügt");
    }
  };

  const deleteFavorite = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    toast.success("Produkt aus Favoriten entfernt");
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
