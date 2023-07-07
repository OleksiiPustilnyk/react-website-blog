import { Card, CardContent, Avatar, Grid } from '@mui/material'
import avatar from 'assets/avatar/donald-glover.jpeg'

import './PostListItem.scss'
import { NavLink } from 'react-router-dom'

type Props = {
    image: string
    tag: string
    title: string
    content: string
}
const PostListItem = ({ image, tag, title, content }: Props) => {
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <CardContent className="post" sx={{ padding: '0' }}>
                <div className="post-img">
                    <div className="block">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                <Grid
                    container
                    justifyContent={'space-between'}
                    className="post-tag-and-like"
                >
                    <Grid item md={2} className="post-tag">
                        {tag}
                    </Grid>
                    <Grid item md={0.5} className="post-like"></Grid>
                </Grid>
                <div className="post-title">{title}</div>
                <p className="post-content">{content}</p>
                <Grid
                    container
                    justifyContent={'space-around'}
                    className="post-author"
                >
                    <NavLink to="/author" className="authot-navlink">
                        <Grid item md={5}>
                            {/* <div className="icon-quotes"></div> */}
                            <Avatar
                                alt="Donald Glover"
                                src={avatar}
                                sx={{ width: 50, height: 50 }}
                                className="author-avatar"
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            md={12}
                            alignItems="center"
                            className="author-name"
                        >
                            Donald Glover
                        </Grid>
                    </NavLink>
                    <Grid item md={1} className="author-space">
                        <div className="author-icon"></div>
                    </Grid>
                    <Grid
                        item
                        container
                        md={2}
                        alignItems="center"
                        className="author-date"
                    >
                        05.06.2023
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default PostListItem
