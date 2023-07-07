import { Grid } from '@mui/material'
import PostListItem from './PostListItem'
import postsArray from 'utils/postsArray'
import Masonry from 'react-responsive-masonry'

type Props = {}
const PostsList = (props: Props) => {
    return (
        <>
            <Masonry columnsCount={3} gutter="25px">
                {postsArray.map(({ id, image, tag, title, content }) => (
                    <Grid key={id}>
                        <PostListItem
                            image={image}
                            tag={tag}
                            title={title}
                            content={content}
                        />
                    </Grid>
                ))}
            </Masonry>
        </>
    )
}
export default PostsList
