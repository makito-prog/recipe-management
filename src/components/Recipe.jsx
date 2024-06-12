import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Recipe.css';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipe = localStorage.getItem('recipe');
    if (storedRecipe) {
      const parsedRecipes = JSON.parse(storedRecipe);
      setRecipes(parsedRecipes);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="Recipe">
        <h2 className='recipe-title'>Recipes</h2>
        {recipes.length > 0 ? (
          <ul className='recipe-list'>
            {recipes.map((recipe, index) => (
              <li key={index} className='recipe-list-item'>
                <h3 className='recipe-list-title'>{recipe.title}</h3>
                <p className='recipe-list-content'>Ingredients: {recipe.ingredients}</p>
                <p className='recipe-lsit-content'>Instructions: {recipe.instructions}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes added yet.</p>
        )}
      </div>
    </>
  );
};

export default Recipe;
