import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import Link from 'components/Link/Link'

import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row-header">
                    <Logo />
                    <Menu />
                    <Link />
                </div>
            </div>
        </header>
    )
}

export default Header
