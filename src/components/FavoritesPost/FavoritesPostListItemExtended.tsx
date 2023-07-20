import { Button, Card, CardContent, Grid } from '@mui/material'
import { Post } from 'utils/postsArray'
import AuthorBlock from 'components/AuthorBlock/AuthorBlock'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import { removePostFromFavorite } from 'redux/favoriteReducer'
import { useAppDispatch } from 'redux/hooks'

type Props = {
    post: Post
}

const FavoritesPostListItemExtended = ({ post }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
            <CardContent className="post" sx={{ padding: '0' }}>
                <NavLink to={post.link} className="post-img">
                    <div className="block">
                        <div className="image">
                            <img src={post.image} alt="" />
                        </div>
                    </div>
                </NavLink>
                <Grid
                    container
                    justifyContent={'space-between'}
                    className="post-tag-and-like"
                >
                    <Grid item md={6}>
                        <NavLink to={post.tagLink} className="post-tag">
                            {post.tag}
                        </NavLink>
                    </Grid>

                    <Grid item md={6}>
                        <Button
                            variant="outlined"
                            onClick={() =>
                                dispatch(removePostFromFavorite(post.id))
                            }
                        >
                            <DeleteIcon />
                        </Button>
                        {/* <Button
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
                </Button> */}
                    </Grid>
                </Grid>
                <NavLink to={post.link} className="post-title">
                    {post.title}
                </NavLink>
                <p className="post-content">{post.content}</p>
                <AuthorBlock />
            </CardContent>
        </Card>
    )
}
export default FavoritesPostListItemExtended
