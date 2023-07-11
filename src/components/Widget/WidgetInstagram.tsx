import { Card, CardContent, Container, Grid, Typography } from '@mui/material'

type Props = {}

const WidgetInstagram = (props: Props) => {
    return (
        <Card
            sx={{
                borderRadius: '20px',
                boxShadow: 'none',
                marginBottom: '20px',
            }}
        >
            <CardContent className="widget" sx={{ paddingTop: '15px' }}>
                <Container>
                    <Typography
                        component="h2"
                        variant="h6"
                        color="white"
                        sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                        }}
                        className="widget-title"
                    >
                        Instagram
                        <div className="icon-for-title">
                            <span className="icon-xx"></span>
                        </div>
                    </Typography>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                        className="widget-inst-images"
                    >
                        <Grid item xs={4} className="post-img">
                            <div className="block">
                                <div className="image">
                                    <img
                                        src="/images/images-widget/widget-instagram-image1.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="post-img">
                            <div className="block">
                                <div className="image">
                                    <img
                                        src="/images/images-widget/widget-instagram-image2.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="post-img">
                            <div className="block">
                                <div className="image">
                                    <img
                                        src="/images/images-widget/widget-instagram-image3.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="post-img">
                            <div className="block">
                                <div className="image">
                                    <img
                                        src="/images/images-widget/widget-instagram-image4.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="post-img">
                            <div className="block">
                                <div className="image">
                                    <img
                                        src="/images/images-widget/widget-instagram-image5.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="post-img">
                            <div className="block">
                                <div className="image">
                                    <img
                                        src="/images/images-widget/widget-instagram-image6.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </CardContent>
        </Card>
    )
}
export default WidgetInstagram
