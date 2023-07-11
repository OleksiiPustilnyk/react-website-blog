import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import imagePostGraff from 'assets/images/images-for-post/graff.jpeg'
import AuthorBlock from 'components/AuthorBlock/AuthorBlock'

import WidgetAuthor from 'components/Widget/WidgetAuthor'
import WidgetInstagram from 'components/Widget/WidgetInstagram'
import WidgetLatestPost from 'components/Widget/WidgetLatestPost'
import WidgetTags from 'components/Widget/WidgetTags'

import SocialList from 'components/SocialList/SocialList'

type Props = {}

const PostTattooIdeasForMens = (props: Props) => {
    return (
        <Container maxWidth="xl" sx={{ padding: '20px 0' }}>
            <Grid container spacing={2}>
                <Grid item xs={8.5}>
                    <Card sx={{ borderRadius: '0', boxShadow: 'none' }}>
                        <CardContent className="post" sx={{ padding: '0' }}>
                            <div className="post-img">
                                <img
                                    src={imagePostGraff}
                                    alt=""
                                    className="imagePage"
                                />
                            </div>
                            <div className="post-title">
                                Graffiti: street art or crime?
                            </div>
                            <p className="post-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec pretium, tortor vitae
                                porttitor suscipit, sapien purus aliquet risus,
                                eu finibus arcu ante nec risus. Mauris porta a
                                massa sed consectetur. Fusce porta, quam sit
                                amet tincidunt facilisis, ipsum enim semper
                                nunc, ut sodales ipsum lectus eget dolor. Duis
                                non dapibus elit. Pellentesque habitant morbi
                                tristique senectus et netus et malesuada fames
                                ac turpis egestas. Donec vel leo egestas,
                                finibus felis ac, luctus felis. Nunc mattis
                                elementum ullamcorper. Vivamus eros mi, dapibus
                                sed enim quis, ullamcorper eleifend nunc.
                                Pellentesque ex eros, venenatis in enim nec,
                                facilisis tincidunt sapien. Quisque porttitor,
                                urna a venenatis eleifend, lacus leo tempus
                                elit, et rutrum nisi libero pulvinar ante.
                                Vestibulum faucibus odio eget tellus maximus
                                vestibulum. In eget eros et massa blandit
                                sagittis. Nullam hendrerit, metus eget varius
                                scelerisque, nisl urna venenatis odio, pharetra
                                pharetra lectus justo aliquet quam.
                            </p>
                            <p className="post-content">
                                Integer ac metus mi. Etiam eget arcu quis ligula
                                ullamcorper hendrerit nec at neque. Vestibulum
                                sed mauris tincidunt, tristique tellus sed,
                                fermentum sapien. Phasellus pretium vestibulum
                                est in porta. Mauris fringilla dapibus lectus
                                vel venenatis. Nulla mauris nisl, iaculis non
                                maximus eu, aliquam eget magna. Fusce magna
                                massa, fringilla id posuere at, accumsan ut
                                erat. Phasellus commodo molestie diam at
                                laoreet. Maecenas lacinia justo in nulla
                                dapibus, a luctus orci sagittis. Nulla ac semper
                                urna.
                            </p>
                            <p className="post-content">
                                Quisque pellentesque, eros non condimentum
                                auctor, nibh arcu faucibus mi, eu lacinia erat
                                ex nec dui. Suspendisse tincidunt lorem a turpis
                                faucibus aliquet. Nunc eu ultrices mauris, in
                                venenatis urna. Vivamus lobortis lorem ligula,
                                sit amet faucibus magna venenatis a. Ut lobortis
                                nunc urna, vel rhoncus nisl convallis eu.
                                Vestibulum porta tellus justo, a elementum urna
                                imperdiet at. Etiam et facilisis dui. Proin ut
                                libero sodales, bibendum est in, elementum
                                risus. Sed tincidunt, eros sed feugiat commodo,
                                purus odio blandit neque, vitae maximus felis
                                eros et erat. Sed gravida nunc a nulla iaculis
                                iaculis. Pellentesque eget massa rhoncus ligula
                                porta ullamcorper.
                            </p>
                            <Container maxWidth="lg" sx={{ padding: '20px' }}>
                                <Card
                                    sx={{
                                        borderRadius: '15px',
                                        boxShadow: 'none',
                                    }}
                                >
                                    <CardContent className="post-quote">
                                        <Container
                                            maxWidth="sm"
                                            className="about-quote"
                                        >
                                            <div className="about-quote-icon">
                                                <div className="border-icon">
                                                    <span className="icon-quotes-comment"></span>
                                                </div>
                                            </div>
                                            <Typography
                                                component="h2"
                                                variant="h6"
                                                align="center"
                                                color="white"
                                                sx={{
                                                    marginTop: '20px',
                                                    marginBottom: '10px',
                                                }}
                                                className="quote"
                                            >
                                                "Graffiti is the tattoos of the
                                                city."
                                            </Typography>
                                            <Typography
                                                align="center"
                                                className="quote-author"
                                            >
                                                Robert Banks (Banksy)
                                            </Typography>
                                        </Container>
                                    </CardContent>
                                </Card>
                            </Container>
                            <p className="post-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur malesuada malesuada
                                metus ut placerat. Cras a porttitor quam, eget
                                ornare sapien. In sit amet vulputate metus.
                                Nullam eget rutrum nisl. Sed tincidunt lorem sed
                                maximus interdum. Interdum malesuada fames ante
                                ipsum primis in faucibus. Aenean scelerisque
                                efficitur mauris nec tincidunt. cursus leo
                                ultricies magna faucibus id.
                            </p>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: '0',
                            boxShadow: 'none',
                            marginTop: '15px',
                        }}
                    >
                        <CardContent
                            className="post"
                            sx={{ padding: '20px 0 20px' }}
                        >
                            <Grid item xs={6}>
                                <Container maxWidth="xs">
                                    <AuthorBlock />
                                </Container>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            borderRadius: '0',
                            boxShadow: 'none',
                            marginTop: '15px',
                        }}
                    >
                        <CardContent
                            className="post"
                            sx={{ padding: '20px 0 20px' }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography
                                        component="h2"
                                        variant="h6"
                                        align="center"
                                        color="white"
                                        sx={{
                                            marginTop: '25px',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <div className="post-social-text">
                                            Share This Story, Choose Your
                                            Platform!
                                        </div>
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <SocialList />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
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
export default PostTattooIdeasForMens
