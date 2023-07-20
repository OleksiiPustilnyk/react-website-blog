import { Container, Grid, Typography } from '@mui/material'
import PostListItem from 'components/Posts/PostListItem'
import WidgetInstagram from 'components/Widget/WidgetInstagram'
import WidgetLatestPost from 'components/Widget/WidgetLatestPost'
import WidgetTags from 'components/Widget/WidgetTags'

import Masonry from 'react-responsive-masonry'

import postsCarsArray from 'utils/postsCarsArray'

type Props = {}

const TagCars = (props: Props) => {
    return (
        <Container maxWidth="xl" sx={{ padding: '20px 0' }}>
            <div className="breadcrumb"></div>
            <Container maxWidth="sm" className="about-list">
                <Typography
                    component="h2"
                    variant="h6"
                    align="center"
                    color="white"
                    sx={{
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                    className="about-title"
                >
                    Tag: <i className="category-title-pink">Cars</i>
                    <div className="icon-for-title">
                        <span className="icon-xx"></span>
                    </div>
                </Typography>
            </Container>
            <Grid container spacing={2}>
                <Grid item xs={8.5}>
                    <p className="favorites-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.Incidunt quae explicabo, ducimus necessitatibus eum
                        aut enim modi saepe perspiciatis fugit
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8.5}>
                    <Masonry columnsCount={2} gutter="25px">
                        {postsCarsArray.map(
                            ({
                                id,
                                image,
                                tag,
                                tagLink,
                                title,
                                link,
                                content,
                            }) => (
                                <Grid key={id}>
                                    <PostListItem
                                        image={image}
                                        tag={tag}
                                        tagLink={tagLink}
                                        title={title}
                                        link={link}
                                        content={content}
                                        id={id}
                                    />
                                </Grid>
                            )
                        )}
                    </Masonry>
                </Grid>
                <Grid item xs={3.5}>
                    <WidgetLatestPost />
                    <WidgetInstagram />
                    <WidgetTags />
                </Grid>
            </Grid>
        </Container>
    )
}
export default TagCars
