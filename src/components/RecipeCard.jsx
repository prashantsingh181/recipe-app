import React from "react";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="flex flex-col w-80 p-6 bg-slate rounded shadow-lg">
      <div className="h-40 flex justify-center items-center overflow-hidden">
        <img src={recipe.image_url} alt="Recipe" className="block w-full" />
      </div>
      <span className="">{recipe.publisher}</span>
      <span className="text-highlight font-bold text-xl text-center">{recipe.title}</span>
    </div>
  );
};

export default RecipeCard;
