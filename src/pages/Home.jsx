import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { recipeList, homeError, loading } = useContext(GlobalContext);

  if (loading) {
    return <Loader />
  }
  return (
    <main className="main">
      {homeError && <span>{homeError}</span>}
      <SearchBar />
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <div className="font-xl font-bold text-center col-span-full">There are no recipes to show. Please enter something meaningful in search bar like "mango".</div>
        )}
      </div>
    </main>
  );
};

export default Home;
