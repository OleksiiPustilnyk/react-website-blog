import './Link.scss'

type Props = {}

const Link = (props: Props) => {
    return (
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
    )
}
export default Link
