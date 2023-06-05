import { Grid } from '@mui/material'
import PostListItem from './PostListItem'
import postsArray from 'utils/postsArray'

type Props = {}
const PostsList = (props: Props) => {
    return (
        <>
            <Grid container spacing={4}>
                {postsArray.map((post) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <PostListItem
                            image={post.image}
                            tag={post.tag}
                            title={post.title}
                            content={post.content}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default PostsList
