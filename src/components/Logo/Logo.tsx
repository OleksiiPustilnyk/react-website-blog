import logo from 'assets/logo/Street Blog (2).svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className="logo">
            <a href="logo-link">
                <img src={logo} alt="Blog-logo" />
            </a>
        </div>
    )
}
export default Logo
