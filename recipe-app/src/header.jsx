import { useNavigate } from "react-router-dom"


function Header() {

    const navigate = useNavigate()

    return (
        <>
            <header>
                <h1>Recipe Stop</h1>
                <nav className="navbar">
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/about',)}>About</li>
                        <li onClick={() => navigate('/recipes')}>Recipes</li>
                        <li onClick={() => navigate('/create')}>Create Your own</li>
                    </ul>
                </nav>
            </header>

        </>
    )


}

export default Header