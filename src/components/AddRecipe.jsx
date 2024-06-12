import React, { useState } from 'react';
import Header from './Header';
import './AddRecipe.css';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    // const [recipe, setRecipe] = useState(null);
    const [latestRecipe, setLatestRecipe] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // 既存のレシピを取得
        const storedRecipe = localStorage.getItem('recipe');
        let existingRecipes = storedRecipe ? JSON.parse(storedRecipe) : [];
    
        // 既存のレシピが配列でない場合、空の配列を代入する
        if (!Array.isArray(existingRecipes)) {
            existingRecipes = [];
        }
    
        // 新しいレシピを作成
        const newRecipe = {
            title: title,
            ingredients: ingredients,
            instructions: instructions,
        };
    
        // 既存のレシピと新しいレシピを組み合わせる
        const updatedRecipes = [...existingRecipes, newRecipe];
    
        // 更新されたレシピを保存
        localStorage.setItem('recipe', JSON.stringify(updatedRecipes));
        
        // 最新のレシピを設定
        setLatestRecipe(newRecipe);
    
        // フォームの入力値をリセット
        setTitle('');
        setIngredients('');
        setInstructions('');
    };
    

    // useEffect(() => {
    //     const storedRecipe = localStorage.getItem('recipe');
    //     if (storedRecipe) {
    //         setRecipe(JSON.parse(storedRecipe));
    //     }
    // }, []);

    return (
        <div>
            <Header />
            <div className='AddRecipe'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Recipe</h2>
                    <label>
                        Title:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                    <label>
                        Ingredients:
                        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                    </label>
                    <label>
                        Instructions:
                        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                    </label>
                    <button type="submit">Add Recipe</button>
                </form>

                {latestRecipe && (
                <div>
                    <h3>Recently Added Recipe:</h3>
                    <p>Title: {latestRecipe.title}</p>
                    <p>Ingredients: {latestRecipe.ingredients}</p>
                    <p>Instructions: {latestRecipe.instructions}</p>
                </div>
            )}
            </div>
        </div>
    );
};

export default AddRecipe;
