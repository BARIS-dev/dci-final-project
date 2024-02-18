import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

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

      return;
    }

    if (favorites.some((favorite) => favorite.id === item.id)) {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } else {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, chosenItem])
      );
      setFavorites([...favorites, chosenItem]);
    }
  };

  const deleteFavorite = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
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
