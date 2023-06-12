import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import Link from 'components/Link/Link'

import { Container } from '@mui/material'

import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <header className="header">
            <Container maxWidth="xl">
                <div className="row-header">
                    <Logo />
                    <Menu />
                    <Link />
                </div>
            </Container>
        </header>
    )
}

export default Header
