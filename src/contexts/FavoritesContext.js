import React from 'react'
const FavoritesContext = React.createContext();

const initialFavorites = [];

export default FavoritesContext;

export const FavoritesContextProvider = props => {
    const [favorites, setFavorites] = React.useState([]);
  
    const value = {
      favorites,
      setFavorites
    };
  
    return (
      <FavoritesContext.Provider value={value}>
        {props.children}
      </FavoritesContext.Provider>
    );
  };