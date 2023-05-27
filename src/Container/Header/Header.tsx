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
                    <div className="header-links"></div>
                </div>
            </div>
        </header>
    )
}

export default Header
