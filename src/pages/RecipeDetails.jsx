import React, { useContext, useLayoutEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context';
import Loader from '../components/Loader';

const RecipeDetails = () => {
    const params = useParams();
    const { recipeDetail, setRecipeDetail, recipeDetailError, setRecipeDetailError, loading, setLoading } = useContext(GlobalContext)
    const getRecipeDetails = useCallback(async (recipeId) => {
        setLoading(true);
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`);
            if (response.ok) {
                const data = await response.json();
                setRecipeDetail(data.data.recipe);
                setRecipeDetailError(null);
            } else {
                setRecipeDetailError(response.statusText);
                setRecipeDetail(null);
            }
        } catch (error) {
            setRecipeDetailError(error.message);
            setRecipeDetail(null);
        } finally {
            setLoading(false);
        }
    }, [setLoading, setRecipeDetail, setRecipeDetailError]);

    useLayoutEffect(() => {
        getRecipeDetails(params.id);
    }, [getRecipeDetails, params.id]);

    if (loading) {
        return <Loader />
    }
    return (
        <main className="main max-h-screen overflow-auto flex">
            {recipeDetailError && <span>{recipeDetailError}</span>}
            {recipeDetail && <div className="flex flex-col lg:flex-row gap-20 overflow-auto w-full">
                <div className="flex-1">
                    <img src={recipeDetail.image_url} alt={recipeDetail.title} className="mx-auto rounded shadow-xl w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-4 flex-1 lg:overflow-auto p-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-highlight text-3xl font-bold">{recipeDetail.title}</h2>
                        <h3 className="text-lg font-bold">{recipeDetail.publisher}</h3>
                        {recipeDetail.source_url && <a href={recipeDetail.source_url} target='_blank' rel="noreferrer" className="underline text-blue-600">Go to Full Recipe</a>}
                    </div>
                    {recipeDetail.ingredients && recipeDetail.ingredients.length > 0 && <div className="font-primary flex flex-col">
                        <h3 className="py-4">Ingredients: </h3>
                        <ul className="list-disc gap-1">
                            {recipeDetail.ingredients.map((ingredient, i) => <IngredientItem key={i} ingredient={ingredient} />)}
                        </ul>
                    </div>}
                </div>
            </div>}
        </main >
    )
}


function IngredientItem({ ingredient }) {
    return <li className="dark:text-cream text-dark">
        <span>{ingredient.description}</span>
        {ingredient.quantity && <>
            <span> - </span>
            <span className="text-highlight whitespace-nowrap">{`${ingredient.quantity} ${ingredient.unit}`}</span>
        </>}
    </li>
}

export default RecipeDetails