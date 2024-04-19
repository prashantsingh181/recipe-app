import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const { recipeList, error } = useContext(GlobalContext);
  return (
    <main className="main">
      <div className="grid grid-cols-1 :grid-cols-2 xl:grid-cols-4 gap-6 justify-center">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((recipe) => <RecipeCard recipe={recipe} />)
        ) : (
          <div>There are no recipes to show.</div>
        )}
      </div>
    </main>
  );
};

export default Home;
