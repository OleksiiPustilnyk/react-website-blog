import { Grid } from '@mui/material'
import PostListItem from './PostListItem'
import postsArray from 'utils/postsArray'
// import Masonry from 'react-responsive-masonry'

type Props = {}
const PostsList = (props: Props) => {
    return (
        <>
            <Grid container spacing={4}>
                {postsArray.map(({ id, image, tag, title, content }) => (
                    <Grid item xs={12} sm={3} md={4} key={id}>
                        <PostListItem
                            image={image}
                            tag={tag}
                            title={title}
                            content={content}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default PostsList
