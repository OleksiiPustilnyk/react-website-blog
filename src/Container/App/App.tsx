import Header from 'Container/Header/Header'
import AboutPage from 'Pages/About/AboutPage'
import CategoriesCarsPage from 'Pages/CategoriesCars/CategoriesCarsPage'
import CategoriesMusicPage from 'Pages/CategoriesMusic/CategoriesMusicPage'
import CategoriesStylePage from 'Pages/CategoriesStyle/CategoriesStylePage'
import ContactPage from 'Pages/Contact/ContactPage'
import AuthorPage from 'Pages/Author/AuthorPage'

import FavoritesPage from 'Pages/Favorites/FavoritesPage'
import Home from 'Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/style" element={<CategoriesStylePage />} />
                <Route path="/music" element={<CategoriesMusicPage />} />
                <Route path="/cars" element={<CategoriesCarsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/author" element={<AuthorPage />} />
            </Routes>
        </>
    )
}

export default App
