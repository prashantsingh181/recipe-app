import { createContext, useCallback, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [homeError, setHomeError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [recipeDetailError, setRecipeDetailError] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSearch = useCallback(async (search) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      if (response.ok) {
        const data = await response.json();
        setRecipeList(data.data.recipes);
      } else {
        setHomeError(response.statusText);
      }
    } catch (error) {
      console.error(error);
      setHomeError(error.message);
    } finally {
      setLoading(false);
    }
  }, [])

  function handleFavoriteToggle(recipeItem) {
    const item = favoriteList.find(favoriteItem => favoriteItem.id === recipeItem.id);
    if (item) {
      setFavoriteList(prevFavoriteList => prevFavoriteList.filter(recipeItem => recipeItem.id !== item.id))
    } else {
      setFavoriteList([...favoriteList, recipeItem]);
    }
  }
  return (
    <GlobalContext.Provider
      value={{ loading, setLoading, searchParams, setSearchParams, homeError, handleSearch, recipeList, recipeDetail, setRecipeDetail, recipeDetailError, setRecipeDetailError, handleFavoriteToggle, favoriteList, setFavoriteList }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
