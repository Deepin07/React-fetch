import React from 'react';
import Margarita from './assets/Margarita.jpg'
import pasta from './assets/pasta.jpg'
import pavBhaji from './assets/pavbhaji.png'



function Profile() {

    const recipes = [
        {
            name: "Margherita Pizza",
            time: "30 mins",
            description: "Classic cheesy pizza with fresh basil.",
            recipeUrl: "https://www.vegrecipesofindia.com/margherita-pizza-recipe/",
            image: Margarita,
        },
        {
            name: "Creamy Garlic Pasta",
            time: "25 mins",
            description: "Delicious pasta in rich, creamy garlic sauce.",
            recipeUrl: "https://www.allrecipes.com/recipe/269500/creamy-garlic-pasta/",
            image: pasta,
        },
        {
            name: "Street Style Pav Bhaji",
            time: "40 mins",
            description: "Spicy Mumbai-style mashed veggie curry with buns.",
            recipeUrl: "https://ranveerbrar.com/recipes/street-style-pav-bhaji/",
            image: pavBhaji,
        }
    ]
    const handleClick = (url) => {
        window.open(url, "_blank")
    };

    return (
        <>
            <div className="card-container">
                {recipes.map((recipe, index) => (
                    <div className="card" key={index}>
                        <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="card-image"
                    />
                       <div className="card-content" style={{ padding: '10px' }}>
                        <h3 style={{ margin: '5px 0' }}>{recipe.name}</h3>
                        <p style={{ margin: '5px 0', fontSize: '14px', color: '#777' }}>{recipe.time}</p>
                        <p style={{ margin: '5px 0', fontSize: '14px' }}>{recipe.description}</p>
                        <button className="card-button" onClick={() => handleClick(recipe.recipeUrl)}>Click for Recipe</button>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Profile