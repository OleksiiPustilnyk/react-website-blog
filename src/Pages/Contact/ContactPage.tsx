import { Card, CardContent, Container, Typography } from '@mui/material'
import imageContactUs from 'assets/images/ContactUs(3).png'

import './ContactPage.scss'

type Props = {}

const ContactPage = (props: Props) => {
    return (
        <Container maxWidth="xl" sx={{ padding: '20px 0' }}>
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
                    Contact Us
                    <div className="icon-for-title">
                        <span className="icon-xx"></span>
                    </div>
                </Typography>
            </Container>
            <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
                <CardContent className="post" sx={{ padding: '0' }}>
                    <div className="post-img">
                        <img
                            src={imageContactUs}
                            alt=""
                            className="imagePage"
                        />
                    </div>
                    <div className="post-title">
                        Feel free to contact any time.
                    </div>
                    <p className="post-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates, repudiandae.
                    </p>
                    <Container maxWidth="lg" sx={{ padding: '20px' }}>
                        <form action="#" className="contact-form">
                            <div className="contact-form-field">
                                <input
                                    type="text"
                                    name="name"
                                    className="contact-form-input"
                                    placeholder="Name*"
                                    required
                                ></input>
                            </div>
                            <div className="contact-form-field">
                                <input
                                    type="text"
                                    name="email"
                                    className="contact-form-input"
                                    placeholder="Email*"
                                    required
                                ></input>
                            </div>
                            <div className="contact-form-field">
                                <input
                                    type="text"
                                    name="subject"
                                    className="contact-form-input"
                                    placeholder="Subject*"
                                    required
                                ></input>
                            </div>
                            <div className="contact-form-field">
                                <textarea
                                    name="message"
                                    className="contact-form-input"
                                    placeholder="Message*"
                                    id="message"
                                    cols={30}
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                name="submit"
                                className="contact-form-btn"
                            >
                                Send Message
                            </button>
                        </form>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    )
}
export default ContactPage
