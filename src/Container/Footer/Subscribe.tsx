import { Container, Typography } from '@mui/material'

type Props = {}

const Subscribe = (props: Props) => {
    return (
        <div className="subscribe">
            <Container maxWidth="sm" sx={{ padding: '20px 0' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    align="center"
                    color="white"
                    sx={{
                        marginBottom: '20px',
                    }}
                    className="subscribe-title"
                >
                    Subscribe to our Newsletter
                </Typography>
                <Typography
                    align="center"
                    color="white"
                    sx={{
                        marginBottom: '20px',
                    }}
                    className="subscribe-text"
                >
                    Sign up for free and be the first to get notified about new
                    posts.
                </Typography>
                <div className="contact-form-field">
                    <input
                        type="text"
                        name="email"
                        className="contact-form-input"
                        placeholder="Your email address"
                        required
                    ></input>
                    <button className="subscribe-btn">Subscribe</button>
                </div>
                <ul className="subscribe-link">
                    <li className="subscribe-link-icon">
                        <span className="icon-facebook"></span>
                        <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li className="subscribe-link-icon">
                        <span className="icon-twitter"></span>
                        <a href="https://www.twitter.com/">Twitter</a>
                    </li>
                    <li className="subscribe-link-icon">
                        <span className="icon-instagram"></span>
                        <a href="https://www.instagram.com/">Instagram</a>
                    </li>
                    <li className="subscribe-link-icon">
                        <span className="icon-youtube"></span>
                        <a href="https://www.youtube.com/">YouTube</a>
                    </li>
                </ul>
            </Container>
        </div>
    )
}
export default Subscribe
