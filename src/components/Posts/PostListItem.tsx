import { Card, CardContent, Avatar, Grid } from '@mui/material'
import avatar from 'assets/avatar/avatar-author-mini.png'

import './PostListItem.scss'

type Props = {
    image: string
    tag: string
    title: string
    content: string
}
const PostListItem = (props: Props) => {
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <CardContent className="post" sx={{ padding: '0' }}>
                <div className="post-img">
                    <img src={props.image} alt="" />
                </div>
                <Grid
                    container
                    justifyContent={'space-between'}
                    className="post-tag-and-like"
                >
                    <Grid item md={2} className="post-tag">
                        {props.tag}
                    </Grid>
                    <Grid item md={0.5} className="post-like"></Grid>
                </Grid>
                <div className="post-title">{props.title}</div>
                <p className="post-content">{props.content}</p>
                <Grid container spacing={2} className="post-author">
                    <Grid item md={2.5}>
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
                        md={5}
                        alignItems="center"
                        className="author-name"
                    >
                        Donald Glover
                    </Grid>
                    <Grid item md={1} className="author-space">
                        <div className="author-icon"></div>
                    </Grid>
                    <Grid
                        item
                        container
                        md={3.5}
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
