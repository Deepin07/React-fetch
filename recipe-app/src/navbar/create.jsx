import React, { useState } from 'react';


function Create() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(({ title, description, image }));

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
            </div>
        </>
    )
}

export default Create;