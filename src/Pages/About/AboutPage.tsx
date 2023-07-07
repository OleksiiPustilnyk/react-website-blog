import { Card, CardContent, Container, Typography } from '@mui/material'
import imageAboutUs from 'assets/images/AboutUs.png'

import './AboutPage.scss'

type Props = {}

const AboutPage = (props: Props) => {
    return (
        <Container maxWidth="xl" sx={{ padding: '40px 0' }}>
            <Container maxWidth="sm" className="about-list">
                <Typography
                    component="h2"
                    variant="h6"
                    align="center"
                    color="white"
                    sx={{
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                    className="about-title"
                >
                    About Us
                    <div className="icon-for-title">
                        <span className="icon-xx"></span>
                    </div>
                </Typography>
            </Container>
            <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
                <CardContent className="post" sx={{ padding: '0' }}>
                    <div className="post-img">
                        <img src={imageAboutUs} alt="" className="imagePage" />
                    </div>
                    <div className="post-title">
                        Thank you for checking out our blog website.
                    </div>
                    <p className="post-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus facere, nemo dignissimos, in labore nostrum
                        provident perferendis minima accusamus aliquam
                        reprehenderit autem
                    </p>
                    <p className="post-content">
                        Praesentium sunt beatae libero non totam.Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Natus
                        facere, nemo dignissimos, in labore nostrum provident
                        perferendis minima accusamus aliquam reprehenderit autem
                        praesentium sunt beatae libero non totam.
                    </p>
                    <Container maxWidth="lg" sx={{ padding: '20px' }}>
                        <Card sx={{ borderRadius: '15px', boxShadow: 'none' }}>
                            <CardContent className="post-quote">
                                <Container
                                    maxWidth="sm"
                                    className="about-quote"
                                >
                                    <div className="about-quote-icon">
                                        <div className="border-icon">
                                            <span className="icon-quotes-comment"></span>
                                        </div>
                                    </div>
                                    <Typography
                                        component="h2"
                                        variant="h6"
                                        align="center"
                                        color="white"
                                        sx={{
                                            marginTop: '20px',
                                            marginBottom: '10px',
                                        }}
                                        className="quote"
                                    >
                                        "Blogs are not literature. It's like
                                        graffiti with commas."
                                    </Typography>
                                    <Typography
                                        align="center"
                                        className="quote-author"
                                    >
                                        Kendrick Lamar
                                    </Typography>
                                </Container>
                            </CardContent>
                        </Card>
                    </Container>
                    <p className="post-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur malesuada malesuada metus ut placerat. Cras a
                        porttitor quam, eget ornare sapien. In sit amet
                        vulputate metus. Nullam eget rutrum nisl. Sed tincidunt
                        lorem sed maximus interdum. Interdum malesuada fames
                        ante ipsum primis in faucibus. Aenean scelerisque
                        efficitur mauris nec tincidunt. cursus leo ultricies
                        magna faucibus id.
                    </p>
                    <p></p>
                </CardContent>
            </Card>
        </Container>
    )
}
export default AboutPage
