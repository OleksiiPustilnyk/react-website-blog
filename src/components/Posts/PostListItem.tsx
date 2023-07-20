import { Button, Card, CardContent, Grid } from '@mui/material'
// import avatar from 'assets/avatar/donald-glover.jpeg'

import './PostListItem.scss'
import { NavLink } from 'react-router-dom'
import AuthorBlock from 'components/AuthorBlock/AuthorBlock'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import { addPostsToFavorites } from 'redux/favoriteReducer'

type Props = {
    id: number
    image: string
    tag: string
    tagLink: string
    title: string
    link: string
    content: string
    addPostsToFavorites?: (id: number, count: number) => void
}
const PostListItem = ({
    id,
    image,
    tag,
    tagLink,
    title,
    link,
    content,
}: Props) => {
    const isLiked = useAppSelector((state) => state.postsLikeState[id])
    const dispatch = useAppDispatch()

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
                    <Grid item md={6}>
                        <NavLink to={tagLink} className="post-tag">
                            {tag}
                        </NavLink>
                    </Grid>

                    <Grid item md={6}>
                        <Button
                            onClick={() =>
                                dispatch(addPostsToFavorites({ id }))
                            }
                        >
                            <Button
                                // onClick={() =>
                                //     dispatch({
                                //         type: 'TOGGLE_LIKE',
                                //         id,
                                //     })
                                // }
                                onClick={() => dispatch(toggleLike(id))}
                            >
                                {isLiked ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </Button>
                        </Button>
                    </Grid>
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
