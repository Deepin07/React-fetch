import {Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Profile from './profile'
import Header from './header'
import Home from './navbar/home'
import About from './navbar/about'
import Recipes from './navbar/recipes'
import Create from './navbar/create'
import RecipeDetails from './navbar/recipeDetails'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </>
  )
}

export default App
