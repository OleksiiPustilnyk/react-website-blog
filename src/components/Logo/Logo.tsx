import logo from 'assets/logo/Street.Blog(5).svg'
import mobLogo from 'assets/mob-logo/mob-Street.Blog.svg'
import { NavLink } from 'react-router-dom'

type Props = {}

const Logo = (props: Props) => {
    return (
        <>
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="Blog-logo" />
                </NavLink>
            </div>
            <div className="mob-logo">
                <a href="logo-link">
                    <img src={mobLogo} alt="Blog-logo" />
                </a>
            </div>
        </>
    )
}
export default Logo
