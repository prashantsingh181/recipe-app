import React, { useContext } from 'react'
import { GlobalContext } from '../context';
import RecipeCard from '../components/RecipeCard';

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);
  return (
    <main className="main">
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {favoriteList && favoriteList.length > 0 ? (
          favoriteList.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <div className="font-xl font-bold text-center col-span-full">There are no favorites to show.</div>
        )}
      </div>
    </main>
  );
}

export default Favorites