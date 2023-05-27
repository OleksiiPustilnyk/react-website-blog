import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'

import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="conteiner">
                <div className="row-header">
                    <Logo />
                    <Menu />
                    <div className="header-links">
                        <a href="https://www.instagram.com/">
                            <div className="border-icon">
                                <span className="icon-instagram"></span>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/">
                            <div className="border-icon">
                                <span className="icon-facebook"></span>
                            </div>
                        </a>
                        <a href="https://www.twitter.com/">
                            <div className="border-icon">
                                <span className="icon-twitter"></span>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/">
                            <div className="border-icon">
                                <span className="icon-youtube"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
