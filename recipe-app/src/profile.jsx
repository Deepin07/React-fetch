function Profile() {

    const pizzas = [
        {
            recipeUrl: "https://www.vegrecipesofindia.com/margherita-pizza-recipe/",
            image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg",
        },
        {
            recipeUrl: "https://www.allrecipes.com/recipe/269500/creamy-garlic-pasta/",
            image: "https://www.allrecipes.com/thmb/EVkTRink6ZvQFts1yXOYTsqQDQw=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
        },
        {
            recipeUrl: "https://www.vegrecipesofindia.com/margherita-pizza-recipe/",
            image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg",
        }
    ]
    const handleClick = (url) => {
        window.open(url, "_blank")
    };

    return (
        <>
            <h1>Pizza Recipe</h1>
            <div className="card-container">
                {pizzas.map((pizza, index) => (
                    <div className="card" key={index}>
                        <img
                            id={`pizza-${index}`}
                            src={pizza.image}
                            alt={`Pizza ${index + 1}`}
                            className="card-image"
                        />
                        <button className="card-button" onClick={() => handleClick(pizza.recipeUrl)}>Click for Recipe</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Profile