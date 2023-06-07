import Favorites from 'components/Favorites/Favorites'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <nav>
                    <ul className="menu-list">
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li className="dropdown">
                            <div className="menu-dropdown">
                                <a href="">
                                    Categories
                                    <span className="icon-arrow"></span>
                                </a>
                            </div>
                            <div className="dropdown-content">
                                <a href="">Style #1</a>
                                <a href="">Music #2</a>
                                <a href="">Travel #3</a>
                                <a href="">Cars #4</a>
                            </div>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <div className="favorites">
                                <a href="">
                                    Favorites
                                    <Favorites />
                                </a>
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
