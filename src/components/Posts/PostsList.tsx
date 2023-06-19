import { Grid } from '@mui/material'
import PostListItem from './PostListItem'
import postsArray from 'utils/postsArray'
import Masonry from 'react-responsive-masonry'

type Props = {}
const PostsList = (props: Props) => {
    return (
        <>
            <Grid container spacing={4}>
                {postsArray.map(({ id, image, tag, title, content }) => (
                    <Masonry key={id}>
                        <PostListItem
                            image={image}
                            tag={tag}
                            title={title}
                            content={content}
                        />
                    </Masonry>
                ))}
            </Grid>
        </>
    )
}
export default PostsList
