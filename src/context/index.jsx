import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      if (response.ok) {
        const data = await response.json();
        setRecipeList(data.data.recipes);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ searchParams, setSearchParams, error, handleSubmit, recipeList }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
