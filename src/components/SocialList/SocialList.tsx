import './SocialList.scss'
type Props = {}

const SocialList = (props: Props) => {
    return (
        <ul className="social-list">
            <li>
                <a href="https://www.facebook.com/">
                    <div className="social-border-icon social-color-bg-facebook">
                        <span className="icon-facebook"></span>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/">
                    <div className="social-border-icon social-color-bg-instagram">
                        <span className="icon-instagram"></span>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com/">
                    <div className="social-border-icon social-color-bg-twitter">
                        <span className="icon-twitter"></span>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/">
                    <div className="social-border-icon social-color-bg-youtube">
                        <span className="icon-youtube"></span>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://www.pinterest.com/">
                    <div className="social-border-icon social-color-bg-pinterest">
                        <span className="icon-pinterest"></span>
                    </div>
                </a>
            </li>
        </ul>
    )
}
export default SocialList
