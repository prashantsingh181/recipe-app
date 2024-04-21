import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GlobalContext } from "../context";

const RecipeCard = ({ recipe }) => {
  const { favoriteList, handleFavoriteToggle } = useContext(GlobalContext);
  const isFavorite = favoriteList.find(item => item.id === recipe.id)
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="h-full flex flex-col w-80 p-6 bg-light dark:bg-slate rounded shadow-md cursor-pointer hover:scale-105 hover:shadow-3xl transition-all duration-300">
        <div className="h-40 flex justify-center items-center overflow-hidden relative">
          <FaHeart className={`absolute z-10 top-2 right-2 text-3xl hover:scale-110 duration-300 ${isFavorite ? "text-highlight" : "dark:text-dark text-cream"}`} onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleFavoriteToggle(recipe);
          }} />
          <img src={recipe.image_url} alt="Recipe" className="block w-full" />
        </div>
        <span className="text-center">{recipe.publisher}</span>
        <span className="text-highlight font-bold text-2xl text-center">{recipe.title}</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
