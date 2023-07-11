import { Avatar, Card, CardContent, Container, Typography } from '@mui/material'
import avatar from 'assets/avatar/donald-glover.jpeg'

import './Widget.scss'

type Props = {}

const WidgetAuthor = (props: Props) => {
    return (
        <Card
            sx={{
                borderRadius: '20px',
                boxShadow: 'none',
                marginBottom: '20px',
            }}
        >
            <CardContent className="widget" sx={{ paddingTop: '15px' }}>
                <Container maxWidth="sm" className="author-list">
                    <Avatar
                        alt="Donald Glover"
                        src={avatar}
                        sx={{ width: 100, height: 100 }}
                        className="author-page-avatar"
                    />
                    <Typography
                        component="h2"
                        variant="h6"
                        align="center"
                        color="white"
                        sx={{
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}
                        className="author-title"
                    >
                        Hi, I'm Donald Glover
                    </Typography>
                    <Typography align="center" color="white">
                        <div className="author-tag">9 Articles</div>
                    </Typography>
                    <Typography
                        align="center"
                        color="white"
                        className="author-description"
                    >
                        My name is Donald Glover "Childish Gambino". American
                        actor, comedian, singer, rapper, director, and producer.
                        Writes songs about people's lives and emotions. Enjoys
                        graffiti and street fashion.
                    </Typography>
                    <Typography align="center" className="author-social">
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
                    </Typography>
                </Container>
            </CardContent>
        </Card>
    )
}
export default WidgetAuthor
