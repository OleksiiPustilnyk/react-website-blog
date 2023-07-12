import { Card, CardContent, Grid } from '@mui/material'
// import avatar from 'assets/avatar/donald-glover.jpeg'

import './PostListItem.scss'
import { NavLink } from 'react-router-dom'
import AuthorBlock from 'components/AuthorBlock/AuthorBlock'

type Props = {
    image: string
    tag: string
    tagLink: string
    title: string
    link: string
    content: string
}
const PostListItem = ({ image, tag, tagLink, title, link, content }: Props) => {
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <CardContent className="post" sx={{ padding: '0' }}>
                <NavLink to={link} className="post-img">
                    <div className="block">
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </NavLink>
                <Grid
                    container
                    justifyContent={'space-between'}
                    className="post-tag-and-like"
                >
                    <Grid item md={2}>
                        <NavLink to={tagLink} className="post-tag">
                            {tag}
                        </NavLink>
                    </Grid>

                    <Grid item md={0.5} className="post-like"></Grid>
                </Grid>
                <NavLink to={link} className="post-title">
                    {title}
                </NavLink>
                <p className="post-content">{content}</p>
                <AuthorBlock />
            </CardContent>
        </Card>
    )
}
export default PostListItem
