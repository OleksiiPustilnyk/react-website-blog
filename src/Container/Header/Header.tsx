import './Header.scss'

type PropsHeader = {}
const Header = (props: PropsHeader) => {
    return (
        <header className="header">
            <div className="conteiner">
                <div className="row-header">
                    <div className="logo">
                        LOGO
                        <a href="logo-link">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul className="menu-list">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li className="dropdown">
                                    <div className="dropdwn">
                                        <a href="">
                                            Categories
                                            <span className="icon-arrow"></span>
                                        </a>
                                    </div>
                                    <div className="dropdown-content">
                                        <a href="">Street style #1</a>
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
                                    <a href="">Favorites</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-links"></div>
                </div>
            </div>
        </header>
    )
}

export default Header
