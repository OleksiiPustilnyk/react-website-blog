import { Container, Grid, Typography } from '@mui/material'
import WidgetAuthor from 'components/Widget/WidgetAuthor'
import WidgetInstagram from 'components/Widget/WidgetInstagram'
import WidgetLatestPost from 'components/Widget/WidgetLatestPost'
import WidgetTags from 'components/Widget/WidgetTags'

import './Favorites.scss'
import FavoritesPostList from 'components/FavoritesPost/FavoritesPostList'
import FavoritesPostListItemExtended from 'components/FavoritesPost/FavoritesPostListItemExtended'
import { useAppSelector } from 'redux/hooks'

type Props = {
    postInFavorite: {
        [id: number]: number
    }
}

const FavoritesPage = (props: Props) => {
    const postInFavorite = useAppSelector((state) => state.postInFavorite)
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
                    Favorites
                    <div className="icon-for-title">
                        <span className="icon-xx"></span>
                    </div>
                </Typography>
            </Container>
            <Grid container spacing={2}>
                <Grid item xs={8.5}>
                    <p className="favorites-paragraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Maxime labore culpa sequi nesciunt rem atque nisi
                        fugiat itaque illum corporis, odit nobis tenetur sunt
                        doloribus ratione corrupti eligendi aperiam.
                        Voluptatibus.
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8.5}>
                    <FavoritesPostList
                        postInFavorite={postInFavorite}
                        FavoriteItem={FavoritesPostListItemExtended}
                    />
                </Grid>
                <Grid item xs={3.5}>
                    <WidgetAuthor />
                    <WidgetLatestPost />
                    <WidgetInstagram />
                    <WidgetTags />
                </Grid>
            </Grid>
        </Container>
    )
}
export default FavoritesPage
