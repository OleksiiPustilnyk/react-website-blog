// import FavoritesNum from 'components/FavoritesNum/FavoritesNum'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <nav>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="dropdown">
                            <div className="menu-dropdown">
                                <NavLink to=" ">
                                    Categories
                                    <span className="icon-arrow"></span>
                                </NavLink>
                            </div>
                            <div className="dropdown-content">
                                <NavLink to="/style">Style #1</NavLink>
                                <NavLink to="/music">Music #2</NavLink>
                                <NavLink to="/cars">Cars #3</NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <div className="favorites">
                                <NavLink to="/favorites">
                                    Favorites
                                    {/* <FavoritesNum /> */}
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="mob-menu">
                <div className="mob-icon-menu"></div>
            </div>
        </>
    )
}
export default Menu
