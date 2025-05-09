import React, { useState } from 'react';

function Create() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [recipes, setRecipes] = useState([])
    const [editingRecipe, setEditingRecipe] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editImage, setEditImage] = useState(null)

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleEditImageChange = (e) => {
        setEditImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: Date.now(), // Unique ID for each recipe
            name: title,
            description: description,
            image: image ? URL.createObjectURL(image) : null,
            time: "30 mins", // Default time
        };
        setRecipes([...recipes, newRecipe]);
        // Reset form
        setTitle('');
        setDescription('');
        setImage('');
    }

    const handleDelete = (recipeId) => {
        setRecipes(recipes.filter(recipe => recipe.id !== recipeId));
    }

    const handleEdit = (recipe) => {
        setEditingRecipe(recipe);
        setEditTitle(recipe.name);
        setEditDescription(recipe.description);
        setEditImage(null);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === editingRecipe.id) {
                return {
                    ...recipe,
                    name: editTitle,
                    description: editDescription,
                    image: editImage ? URL.createObjectURL(editImage) : recipe.image
                };
            }
            return recipe;
        });
        setRecipes(updatedRecipes);
        setEditingRecipe(null);
    }

    return (
        <>
            <div className="create-recipe-container" style={{ maxWidth: '600px', margin: 'auto' }}>
                <h1>Create Your Own Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Recipe Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows="5"
                            style={{ width: '100%', padding: '0.5rem' }}
                        ></textarea>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label>Upload Image</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        {image && <p>Selected file: {image.name}</p>}
                    </div>
                    <div className="button-wrapper">
                        <button className='submit-button' type="submit">Submit Recipe</button>
                    </div>
                </form>

                {/* Display submitted recipes */}
                <div className="card-container" style={{ marginTop: '2rem' }}>
                    {recipes.map((recipe) => (
                        <div className="card" key={recipe.id}>
                            {recipe.image && (
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="card-image"
                                />
                            )}
                            <div className="card-content" style={{ padding: '10px' }}>
                                <h3 style={{ margin: '5px 0' }}>{recipe.name}</h3>
                                <p style={{ margin: '5px 0', fontSize: '14px', color: '#777' }}>{recipe.time}</p>
                                <p style={{ margin: '5px 0', fontSize: '14px' }}>{recipe.description}</p>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                                    <button 
                                        onClick={() => handleEdit(recipe)}
                                        style={{
                                            padding: '5px 10px',
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(recipe.id)}
                                        style={{
                                            padding: '5px 10px',
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Edit Modal */}
                {editingRecipe && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '90%',
                            maxWidth: '500px'
                        }}>
                            <h2>Edit Recipe</h2>
                            <form onSubmit={handleEditSubmit}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label>Recipe Title</label>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        required
                                        style={{ width: '100%', padding: '0.5rem' }}
                                    />
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label>Description</label>
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '0.5rem' }}
                                    ></textarea>
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label>Upload New Image (Optional)</label>
                                    <input type="file" accept="image/*" onChange={handleEditImageChange} />
                                    {editImage && <p>Selected file: {editImage.name}</p>}
                                </div>

                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                                    <button
                                        type="button"
                                        onClick={() => setEditingRecipe(null)}
                                        style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#666',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Create;