import { Card, CardContent, Container, Grid, Typography } from '@mui/material'

import './Widget.scss'
import { NavLink } from 'react-router-dom'

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
                                <NavLink
                                    to="/post/Tattoo-ideas-for-mens"
                                    className="block"
                                >
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/tattoo.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </NavLink>
                            </Grid>
                            <div className="mini-post-num">1</div>
                            <Grid item md={7} className="mini-post-content">
                                <NavLink
                                    to="/post/Tattoo-ideas-for-mens"
                                    className="mini-post-title"
                                >
                                    Tattoo ideas for men's
                                </NavLink>
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
                                <NavLink
                                    to="/post/Asap-Rocky-in-NFS-Unbound"
                                    className="block"
                                >
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/rocky.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </NavLink>
                            </Grid>
                            <div className="mini-post-num">2</div>
                            <Grid item md={7} className="mini-post-content">
                                <NavLink
                                    to="/post/Asap-Rocky-in-NFS-Unbound"
                                    className="mini-post-title"
                                >
                                    A$ap Rocky in NFS Unbound
                                </NavLink>
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
                                <NavLink
                                    to="/post/Top-10-best-festival"
                                    className="block"
                                >
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/festivals.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </NavLink>
                            </Grid>
                            <div className="mini-post-num">3</div>
                            <Grid item md={7} className="mini-post-content">
                                <NavLink
                                    to="/post/Top-10-best-festival"
                                    className="mini-post-title"
                                >
                                    Top 10 best festival
                                </NavLink>
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
                                <NavLink
                                    to="/post/Mac-Miller-and-his-last-album"
                                    className="block"
                                >
                                    <div className="image">
                                        <img
                                            src="/images/images-posts/miller.jpeg"
                                            alt="mini-post-img"
                                        />
                                    </div>
                                </NavLink>
                            </Grid>
                            <div className="mini-post-num">4</div>
                            <Grid item md={7} className="mini-post-content">
                                <NavLink
                                    to="/post/Mac-Miller-and-his-last-album"
                                    className="mini-post-title"
                                >
                                    Mac Miller and his last album
                                </NavLink>
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
