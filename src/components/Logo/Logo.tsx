import logo from 'assets/logo/Street.Blog(5).svg'
import mobLogo from 'assets/mob-logo/mob-Street.Blog.svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <>
            <div className="logo">
                <a href="logo-link">
                    <img src={logo} alt="Blog-logo" />
                </a>
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
