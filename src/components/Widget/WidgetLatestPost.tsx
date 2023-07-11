import { Card, CardContent, Container, Grid, Typography } from '@mui/material'

import './Widget.scss'

type Props = {}

const WidgetLatestPost = (props: Props) => {
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
                        Latest Posts
                        <div className="icon-for-title">
                            <span className="icon-xx"></span>
                        </div>
                    </Typography>
                    <div className="last-post-list">
                        <Grid container className="mini-post">
                            <Grid item md={4} className="post-img">
                                <div className="block">
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/tattoo.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <div className="mini-post-num">1</div>
                            <Grid item md={7} className="mini-post-content">
                                <div className="mini-post-title">
                                    Tattoo ideas for men's
                                </div>
                                <Grid container className="mini-post-data">
                                    <Grid
                                        item
                                        md={1}
                                        className="icon-clock"
                                    ></Grid>
                                    <Grid item md={11}>
                                        05.06.2023
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container className="mini-post">
                            <Grid item md={4} className="post-img">
                                <div className="block">
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/rocky.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <div className="mini-post-num">2</div>
                            <Grid item md={7} className="mini-post-content">
                                <div className="mini-post-title">
                                    A$ap Rocky in NFS Unbound
                                </div>
                                <Grid container className="mini-post-data">
                                    <Grid
                                        item
                                        md={1}
                                        className="icon-clock"
                                    ></Grid>
                                    <Grid item md={11}>
                                        05.06.2023
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container className="mini-post">
                            <Grid item md={4} className="post-img">
                                <div className="block">
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/festivals.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <div className="mini-post-num">3</div>
                            <Grid item md={7} className="mini-post-content">
                                <div className="mini-post-title">
                                    Top 10 best festival
                                </div>
                                <Grid container className="mini-post-data">
                                    <Grid
                                        item
                                        md={1}
                                        className="icon-clock"
                                    ></Grid>
                                    <Grid item md={11}>
                                        05.06.2023
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container className="mini-post">
                            <Grid item md={4} className="post-img">
                                <div className="block">
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/miller.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </div>
                            </Grid>
                            <div className="mini-post-num">4</div>
                            <Grid item md={7} className="mini-post-content">
                                <div className="mini-post-title">
                                    Mac Miller and his last album
                                </div>
                                <Grid container className="mini-post-data">
                                    <Grid
                                        item
                                        md={1}
                                        className="icon-clock"
                                    ></Grid>
                                    <Grid item md={11}>
                                        05.06.2023
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </CardContent>
        </Card>
    )
}
export default WidgetLatestPost
