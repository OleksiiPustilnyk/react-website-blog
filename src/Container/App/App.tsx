import Header from 'Container/Header/Header'
import Footer from 'Container/Footer/Footer'

import AboutPage from 'Pages/About/AboutPage'
import CategoriesCarsPage from 'Pages/CategoriesCars/CategoriesCarsPage'
import CategoriesMusicPage from 'Pages/CategoriesMusic/CategoriesMusicPage'
import CategoriesStylePage from 'Pages/CategoriesStyle/CategoriesStylePage'
import ContactPage from 'Pages/Contact/ContactPage'
import AuthorPage from 'Pages/Author/AuthorPage'
import FavoritesPage from 'Pages/Favorites/FavoritesPage'
import Home from 'Pages/Home/Home'
import PostTattooIdeasForMens from 'Pages/PostPages/PostTattooIdeasForMans/PostTattooIdeasForMens'

import { Route, Routes } from 'react-router-dom'
import PostClassicJapanCars from 'Pages/PostPages/PostClassicJapanCars/PostClassicJapanCars'
import PostTop10BestFestival from 'Pages/PostPages/PostTop10BestFestival/PostTop10BestFestival'
import PostAsapRockyInNFSUnbound from 'Pages/PostPages/PostAsapRockyInNFSUnbound/PostAsapRockyInNFSUnbound'
import PostStreetWear from 'Pages/PostPages/PostStreetWear/PostStreetWear'
import PostMacMillerAndHisLastAlbum from 'Pages/PostPages/PostMacMillerAndHisLastAlbum/PostMacMillerAndHisLastAlbum'
import PostGraffitiStreetArtOrCrime from 'Pages/PostPages/PostGraffitiStreetArtOrCrime/PostGraffitiStreetArtOrCrime'
import PostBestRapperIn90 from 'Pages/PostPages/PostBestRapperIn90/PostBestRapperIn90'
import PostRwbRAUHWeltBegriff from 'Pages/PostPages/PostRwbRAUHWeltBegriff/PostRwbRAUHWeltBegriff'

import TagMusic from 'Pages/TagsPages/TagMusic'
import TagStreet from 'Pages/TagsPages/TagStreet'
import TagGraffiti from 'Pages/TagsPages/TagGraffiti'
import TagCars from 'Pages/TagsPages/TagCars'
import TagTattoo from 'Pages/TagsPages/TagTattoo'
import TagRap from 'Pages/TagsPages/TagRap'
import TagFamous from 'Pages/TagsPages/TagFamous'
import TagStyle from 'Pages/TagsPages/TagStyle'
import TagGames from 'Pages/TagsPages/TagGames'
import TagRWB from 'Pages/TagsPages/TagRWB'
import { useState } from 'react'

type PostInFavorite = {
    [id: number]: number
}

// export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [postInFavorite, setpostInFavorite] = useState<PostInFavorite>({})

    // const addPostToFavorite = (id: number, count: number) => {
    //     setpostInFavorite((prevState) => ({
    //         ...prevState,
    //         [id]: (prevState[id] || 0) + count,
    //     }))
    // }

    return (
        <>
            {/* <AppContext.Provider></AppContext.Provider> */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/style" element={<CategoriesStylePage />} />
                <Route path="/music" element={<CategoriesMusicPage />} />
                <Route path="/cars" element={<CategoriesCarsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                    path="/favorites"
                    element={<FavoritesPage postInFavorite={postInFavorite} />}
                />
                <Route path="/author" element={<AuthorPage />} />
                <Route
                    path="/post/Tattoo-ideas-for-mens"
                    element={<PostTattooIdeasForMens />}
                />
                <Route
                    path="/post/Classic-Japan-cars"
                    element={<PostClassicJapanCars />}
                />
                <Route
                    path="/post/Top-10-best-festival"
                    element={<PostTop10BestFestival />}
                />
                <Route
                    path="/post/Asap-Rocky-in-NFS-Unbound"
                    element={<PostAsapRockyInNFSUnbound />}
                />
                <Route path="/post/StreetWear" element={<PostStreetWear />} />
                <Route
                    path="/post/Mac-Miller-and-his-last-album"
                    element={<PostMacMillerAndHisLastAlbum />}
                />
                <Route
                    path="/post/Gtaffiti-street-art-or-crime?"
                    element={<PostGraffitiStreetArtOrCrime />}
                />
                <Route
                    path="/post/Best-Rapper-in-90"
                    element={<PostBestRapperIn90 />}
                />
                <Route
                    path="/post/RWB-RAUH-Welt-Begriff"
                    element={<PostRwbRAUHWeltBegriff />}
                />
                <Route path="/tag/music" element={<TagMusic />} />
                <Route path="/tag/street" element={<TagStreet />} />
                <Route path="/tag/graffiti" element={<TagGraffiti />} />
                <Route path="/tag/cars" element={<TagCars />} />
                <Route path="/tag/tattoo" element={<TagTattoo />} />
                <Route path="/tag/rap" element={<TagRap />} />
                <Route path="/tag/famous" element={<TagFamous />} />
                <Route path="/tag/style" element={<TagStyle />} />
                <Route path="/tag/games" element={<TagGames />} />
                <Route path="/tag/rwb" element={<TagRWB />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
